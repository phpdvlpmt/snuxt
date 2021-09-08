<template>
  <div class="antialiased">
    <TheHeader />
    <Nuxt />
  </div>
</template>
<script>
export default {
  mounted(){
   return this.$supabase.auth.onAuthStateChange((event, session) => {
  //  console.log(new Date(1631027104*1000))
})
  }
}
</script>
