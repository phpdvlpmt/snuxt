<template>
  <section class="relative bg-gray-100 min-h-screen md:flex"> 
    <!-- mobile menu bar -->
    <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      <!-- logo -->
      <nuxt-link to="#" class="block p-4 text-white font-bold">VL</nuxt-link>
       <!-- mobile menu button -->
       <button class="p-4 focus:outline-none focus:bg-gray-700"  @click="close = !close">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
       </button>
    </div>

     <!-- Sidebar -->
<div :class="{'-translate-x-full' : close}" class=" bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform  transition duration-700 ease-in-out">
  <!-- logo -->
 <nuxt-link to="#" class=" text-white flex items-center space-x-2 px-4">
<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
<span class="text-2xl font-extrabold">VL</span>
 </nuxt-link>
  <!-- nav -->
  <nav>
    <nuxt-link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"> Item 1</nuxt-link>
    <nuxt-link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"> Item 2</nuxt-link>
    <nuxt-link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"> Item 3</nuxt-link>
    <nuxt-link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"> Item 4</nuxt-link>
    <nuxt-link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"> Item 5</nuxt-link>
    <nuxt-link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"> Item 6</nuxt-link>
    <nuxt-link to="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"> Item 7</nuxt-link>  
  </nav>
</div>
<!-- Content -->
<div class="flex-1 p-10 text-2xl font-bold">
 content
</div>
    
  </section>
</template>

<script>
export default {
layout: 'layout',
data() {
  return {
 close: true
  }
}
}
</script>

<style>

</style>