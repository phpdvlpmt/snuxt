<template>
  <section class="container mx-auto px-5 bg-green-500 py-4 min-h-screen ">
      
    <div class="w-full space-y-4 p-5 bg-gradient-to-r
      from-purple-800
      via-blue-800
      to-purple-800">
    <div class="w-full relative">
      <span class="absolute inset-y-0 flex items-center pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          /></svg
      ></span>
      <input
        v-model="search"
        type="search"
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          pl-10
          text-gray-700
          leading-tight
          focus:outline-none focus:shadow-outline
        "
      />
    </div>
    <div class="w-full flex items-start space-x-6">
    <table class="w-full table-auto text-gray-600 text-xs">
      <thead>
        <tr class="bg-gray-500">
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">ID</span>
          </th>
         
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">Příjmení</span>
          </th>
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">Třída</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-gray-200">
        <tr
          v-for="l in filteredList"
          :key="l.id"
          class="bg-white border border-gray-200"
        >
          <td class="px-4 py-2">
            {{ l.id }}
          </td>
          <td class="px-4 py-2">
            {{ l.name }}
          </td>
          <td class="px-4 py-2">
            {{ l.class }}
          </td>
        </tr>
      </tbody>
    </table>
    <!--2 t-->
    <table class="w-full table-auto text-gray-600 text-xs">
      <thead>
        <tr class="bg-gray-500">
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">ID</span>
          </th>
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">Předmět</span>
          </th>
          
        </tr>
      </thead>
      <tbody class="bg-gray-200">
        <tr
          v-for="l in subjects.data"
          :key="l.id"
          class="bg-white border border-gray-200"
        >
          <td class="px-4 py-2">
            {{ l.id }}
          </td>
          <td class="px-4 py-2">
            {{ l.subject }}
          </td>
         
        </tr>
      </tbody>
    </table>
    </div>
    <!--2 row-->
    <div class="w-full  flex items-start space-x-5 ">
        <table class="w-1/2 table-auto text-gray-600 text-xs">
      <thead>
        <tr class="bg-gray-500">
         
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">Příjmení (userId)</span>
          </th>
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">Předmět</span>
          </th>
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">Známky</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-gray-200">
        <tr
          v-for="l in grades.data"
          :key="l.id"
          class="bg-white border border-gray-200"
        >
          
          <td class="px-4 py-2">
            {{ l.pupils.name }}
          </td>
          <td class="px-4 py-2">
           {{ l.subjects.subject }}
          </td>
          <td class="px-4 py-2">
           {{ l.grade }}
          </td>
         
        </tr>
      </tbody>
        </table>
        <div class="w-1/2">
        <select @change="getPupilGrades($event)" class="w-full">
            <option   v-for="p in pupils.data" :key="p.id" :value= p.id>{{ p.name}} </option>
            
        </select>   
        
        <table v-if="pupilGrades" class="w-full table-auto text-gray-600 text-xs ">
      <thead>
        <tr class="bg-gray-500">
          <th class="px-4 py-2 text-left">
            <span class="text-gray-300">Známky</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-gray-200">
        <tr
          v-for="l in pupilGrades.data"
          :key="l.id"
          class="bg-white border border-gray-200"
        >
          <td colspan="2" class="px-4 py-2">
            {{ l.grade }}
          </td>
        </tr>
      </tbody>
        </table>
        </div>
    </div>
    <div>
      <form
        class="bg-white shadow-md rounded pt-2 px-4 pb-4 mb-4"
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
  async asyncData({ $supabase }) {
    const { data } = await $supabase
      .from('pupils')
      .select('*')
      .order('id', { ascending: true })
    return {
      list: data,
    }
  },
  
  data() {
    return {
      list: [],
      subjects: [],
      grades: [],
      pupils:[],
      pupil:'',
      cls:'',
      pupilId: null,
      pupilGrades:[],
      search: '',
    }
  },
  computed: {
    filteredList() {
      const l = this.list
      return l.filter((src) =>
        src.class.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    
   

  },
  async mounted() {
    await this.subscribeLists();
  },
  created(){
      this.getSubjects()
      this.getGrades()
      this.getPupils()
     
  },
  methods:{
     async getList() {
     const { data } = await this.$supabase
      .from('pupils')
      .select('*')
      .order('id', { ascending: true })
    return {
      list: data,
    }
    },
    async getSubjects() {
      this.subjects = await this.$supabase.from("subjects").select("*");
    },
     async getPupils() {
      this.pupils = await this.$supabase.from("pupils").select("*");
    },
     async getGrades() {
      this.grades = await this.$supabase.from("grades").select(`
    id, grade,
    pupils (
      name
    ),
    subjects(
        subject
    )
  `)
    },
     async getPupilGrades(event) {
         
         if(this.pupilId !== ""){
      this.pupilGrades = await this.$supabase.from("grades").select(`
    id, grade,
    pupils (
      name
    ),
    subjects(
        subject
    )
  `).eq('pupilId', event.target.value).eq('subjectId', 1)
    }
    },
  async  addNewPupil(){
      await this.$supabase
  .from('pupils')
  .insert([
    { name: this.pupil, class: this.cls }
  ])
 
    },
    subscribeLists() {
     this.$supabase
       .from('pupils')
    .on("INSERT", (message) => {
          if (message.new) {
            this.list.push(message.new);
          }
        })
        .subscribe();
    },
  }
}
</script>

<style></style>
