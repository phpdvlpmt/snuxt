<template>
  <section class=" h-screen flex items-center justify-center">
    <div v-if="error" class="w-full max-w-xs text-red-800">{{ error }}</div>
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded pt-2 px-4 pb-4 mb-4"
        @submit.prevent="submit()"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="email"
            type="email"
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
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            v-model="password"
            type="password"
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
            Sign In
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    submit() {
      this.$supabase.auth
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then(({ error, data }) => {
          if (error) {
            this.error = error.message
          } else {
            this.$store.commit('setUser', this.$supabase.auth.session())
            this.$router.push('/lists')
          }
        })
    },
  },
}
</script>

<style></style>
