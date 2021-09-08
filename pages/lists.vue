<template>
  <section class="px-12">
    <div class="flex justify-between items-center my-4">
      <img
        src="https://supabase.io/new/images/logo-dark.png"
        alt="logo Supabase"
        class="h-8"
      />
    </div>
    <div class="my-2 w-80">
      <h1
        class="
          bg-clip-text
          text-transparent text-4xl
          bg-gradient-to-r
          from-purple-800
          to-pink-500
          font-extrabold
        "
      >
        List
      </h1>
      <div>
        <div>Sort by ID</div>
        <div @click="asc()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-6
              w-6
              text-gray-500
              cursor-pointer
              hover:text-green-500
              transition-all
              delay-150
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
        </div>
        <div @click="desc()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-6
              w-6
              text-gray-500
              cursor-pointer
              hover:text-green-500
              transition-all
              delay-150
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>
        <div class="my-2 w-full relative">
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
          id="search"
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
      </div>
      <table class="min-w-64 w-full table-auto text-gray-600 text-xs">
        <thead>
          <tr class="bg-gray-500">
            <th class="px-4 py-2 text-left">
              <span class="text-gray-300">ID</span>
            </th>
            <th class="px-4 py-2 text-left">
              <span class="text-gray-300">NAME</span>
            </th>
            <th class="px-4 py-2 text-left">
              <span class="text-gray-300">GRADES</span>
            </th>
            <th class="px-4 py-2 text-left">
              <span class="text-gray-300">CREATED</span>
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
              {{ l.grades }}
            </td>
            <td class="px-4 py-2">
              {{ l.created }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-green-500">Average: {{ grades }}</div>
      <div>{{ search }}</div>
    </div>
  </section>
</template>

<script>
import { average, sum } from '../helper/helper.js'
export default {
  middleware: 'secure',
  async asyncData({ $supabase }) {
    const { data } = await $supabase
      .from('list')
      .select('*')
      .order('id', { ascending: true })
    return {
      list: data,
    }
  },
  data() {
    return {
      grades: null,
      list: [],
      search: '',
    }
  },
  computed: {
    filteredList() {
      return this.list.filter((src) =>
        src.name.toLowerCase().includes(this.search.toLowerCase())
      )
    },
   
  },
  mounted() {
    // this.$store.commit('setUser', this.$supabase.auth.session())
    
    this.avrg2()
    this.secti()
  },
  methods: {
    async avrg() {
      const l = await this.$supabase.from('list').select('grades')
      let sum = 0
      let av = 0

      for (let i = 0; i < l.data.length; i++) {
        sum += l.data[i].grades
      }
      av = sum / l.data.length
      this.grades = av.toFixed(1)
    },

    avrg2() {
      const total = this.list.reduce((acc, cur) => acc + cur.grades, 0)
      const av = average(total, this.list.length)
      this.grades = av.toFixed(1)
    },
    asc() {
      const desc = this.list.sort((a, b) => a.id - b.id)
      return desc
    },
    desc() {
      const asc = this.list.sort((a, b) => b.id - a.id)

      return asc
    },
    secti() {
      console.log(sum(5, 78))
    },
    
  },
}
</script>

<style></style>
