<template>
  <section class="mt-2 px-12">index</section>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setUser', this.$supabase.auth.session())
    
  },
}
</script>
