<template>
  <section>
      <transition name="slide">
     <div v-if="isOpen" class=" bg-white shadow-lg  w-64  min-h-screen  fixed ">
<span  class="ml-auto" @click="isOpen = !isOpen">       
<svg  xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5 cursor-pointer m-1 ml-auto"  viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
</span>
<div class="bg-green-200">
  <ul class="px-4 space-y-4 bg-red-800"  >
    <li v-for="nav in navigation" :key="nav.display" @click="close">
      <nuxt-link :to="nav.link">{{ nav.display}}  </nuxt-link>
    </li>
  </ul>
</div>   
     </div>
     </transition>
     <div class="p-2">
         <span @click="isOpen = !isOpen">
        <svg  xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5 cursor-pointer"  viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
</span>
    </div> 
    <div class="lg:grid lg:grid-cols-2 gap-4 p-4" >
        <div class="w-full bg-white p-4 shadow-xl rounded-lg"  >
            <ul>
                <li v-for="l in list" :key="l.id">
                    {{ l.name }}
                </li>
            </ul>
        </div>
        <div class="w-full bg-white h-64 shadow-md rounded">
            <form
        class="bg-white  pt-2 px-4 pb-4 mb-4"
        @submit.prevent="addNewPupil()"
      >
       <label class="block text-gray-700 text-sm font-bold mb-2">
            Pupil
          </label>
          <input
            v-model="pupil"
            type="text"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
          />
        
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Class
          </label>
          <input
            v-model="cls"
            type="text"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-1
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
          />
        </div>
        <div>
          <button
            type="submit"
            class="
              bg-purple-800
              hover:bg-purple-900
              text-white
              font-bold
              py-1
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
          >
            Add new pupil
          </button>
          
          </div>
      </form>
        </div>
       
    </div>
     
  </section>
</template>

<script>
export default {
layout: 'layout',
async asyncData({ $supabase }) {
    const { data } = await $supabase
      .from('pupils')
      .select('*')
      .order('id', { ascending: true })
    return {
      list: data
      
    }
  },
data() {
    return {
        isOpen: false,
        list:[],
        cls: '',
        pupil: '',
        navigation:[
          { display: 'Home', link: '/'},
          { display: 'List', link: '/lists'},
          { display: 'Pupils', link: '/pupils'},
          { display: 'Example', link: '/example'},
          { display: 'Design', link: '#ok'}
          ]
        
    }
},
watch:{
'$route' () {
  this.isOpen = false
  
}
},

  async mounted() {
    await this.subscribeLists();
  },
  destroyed() {
    this.unsubscribePosts();
  },
  methods:{
      async  addNewPupil(){
      await this.$supabase
  .from('pupils')
  .insert([
    { name: this.pupil, class: this.cls }
  ])
 this.pupil=''
 this.cls = ''
 
    },
    subscribeLists() {
     this.$supabase
       .from('pupils')
    .on("INSERT", (message) => {
          if (message.new) {
            this.list.push(message.new)
            console.log(message.new)
          }
        })
        .subscribe()
        
    },
    unsubscribePosts() {
      this.$supabase.removeSubscription(this.subscribeLists);
    },
    close(){
   this.isOpen = !this.isOpen
  }
  },
  
}
</script>

<style scoped>
.slide-enter-active,
    .slide-leave-active
    {
        transition: transform 1s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 1s ease 0s
    }

    

</style>