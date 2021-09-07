<template>
  <div class="w-full max-w-xs">
      reg
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submit()">
          <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
		<input v-model="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
          </div>
        <div class="mb-6">  
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
        <input v-model="password" type="password"  class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
        <div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
        </div>
    </form>
      </div>
</template>

<script>
export default {
    data() {
		return {
			email: '',
			password: '',
		}
	},
    methods: {
		submit() {
			this.$supabase.auth
				.signUp({
					email: this.email,
					password: this.password,
				})
				.then(({ error, data }) => {
					if (error) {
						alert(error.message)
					} else {
						this.$router.push('/sign-in')
					}
				})
		},
	},

}
</script>

<style>

</style>