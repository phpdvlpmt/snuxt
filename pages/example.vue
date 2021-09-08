<template>
  <section class=" mx-auto bg-gray-50 px-8 sm:bg-200 md:bg-green-800 lg:bg-blue-800 py-10">
    <div class="sm:flex sm:flex-wrap sm:-mx-4">
      <div v-for="s in symbols" :key="s.symbol" class="w-full sm:w-1/3 md:w-1/3 lg:w-1/6  px-4 mb-4" >
        <div class="p-2 bg-white shadow-2xl rounded-lg  h-full space-y-2 ">
          <div class=" text-center">{{ s.symbol }}</div>
          <div v-if="s.img">
            <img :src="s.img" alt="" class="w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'layout',
  data() {
    return {
      symbols: [
        {
          symbol: 'vlajka + barvy',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/180px-Flag_of_the_Czech_Republic.svg.png',
        },
        {
          symbol: 'hymna',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Skroup-Anthem.jpg/330px-Skroup-Anthem.jpg',
        },
        {
          symbol: 'velký státní znak',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Coat_of_arms_of_the_Czech_Republic.svg/150px-Coat_of_arms_of_the_Czech_Republic.svg.png',
        },
        {
          symbol: 'malý státní znak',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Small_coat_of_arms_of_the_Czech_Republic.svg/147px-Small_coat_of_arms_of_the_Czech_Republic.svg.png',
        },
        {
          symbol: 'státní pečeť',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Seal_of_the_Czech_Republic.png/330px-Seal_of_the_Czech_Republic.png',
        },
        {
          symbol: 'standarta',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_the_President_of_the_Czech_Republic.svg/180px-Flag_of_the_President_of_the_Czech_Republic.svg.png',
        },
      ],
    }
  },
}
</script>

<style></style>
