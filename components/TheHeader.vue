<template>
  <header
    class="
    fixed
      inset-x-0
      px-12
      bg-gradient-to-r
      from-purple-800
      via-blue-800
      to-purple-800
      p-2
      flex
      justify-between
      items-center
      text-white
      shadow-lg
    "
  >
    <div class="flex items-center">
      <NuxtLogo2 class="mr-8" />
      <NuxtLink to="/" class="hover:text-green-300 transition-all delay-150"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/lists"
        class="ml-2 hover:text-green-300 transition-all delay-150"
        >Lists</NuxtLink
      >
      <NuxtLink
        to="/example"
        class="ml-2 hover:text-green-300 transition-all delay-150"
        >Symboly</NuxtLink
      >
    </div>
    <div class="flex items-center">
      <div v-if="$store.state.isAuthenticated" class="text-bold text-white">
        {{ $store.state.user.user.email }}
      </div>
      <div v-if="$store.state.isAuthenticated">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 ml-4 cursor-pointer hover:text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="signOut()"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  mounted() {
    if (this.$supabase.auth.user()) {
		this.$store.commit('setUser', this.$supabase.auth.session())
	}
    
  },
  methods: {
    signOut() {
      this.$supabase.auth.signOut().then(({ error }) => {
        if (error) {
          console.log(error)
        } else {
          this.$store.commit('signOut', null)
          this.$router.push('/sign-in')
        }
      })
    },
  }

}
</script>
