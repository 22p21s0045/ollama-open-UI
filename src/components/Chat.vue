<script setup>
const props = defineProps({
  history: {
    type: Array,
    default: () => [],
    required: true,
  },
})
</script>
<template>
  <div class="w-full h-full max-h-fit bg-red-400 flex flex-col gap-2 overflow-auto">
    <div class="max-h-fit w-full bg-black flex flex-row" alt="container">
      <div class="avatar p-3 pt-6 max-h-28">
        <div class="w-12 max-h-12 rounded">
          <img
            src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="p-7 text-justify max-h-fit">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates qui debitis enim sunt voluptatem beatae vel repellat soluta fuga pariatur? Quod error labore quidem inventore nam cupiditate ducimus harum ipsum minima rem veniam deleniti placeat sed, dignissimos debitis perferendis magnam veritatis officiis eius, quaerat assumenda quia asperiores aut. Veritatis, nam. Alias incidunt minima, corrupti consequuntur ratione fugit, omnis nisi perspiciatis error vel rem inventore aliquid dolorem assumenda ex ad. Inventore asperiores quaerat, quisquam quod eligendi optio quae pariatur nulla facilis sit labore quas vel, voluptas hic nihil et, iure exercitationem ut! Consectetur, libero quod consequuntur nobis enim omnis placeat debitis dolores atque magni. Molestias perferendis, rerum vero inventore corrupti obcaecati id est dolorum aliquid, illum porro? Perspiciatis officiis nisi, officia modi tempore eaque alias minima ipsam, sit veritatis cum eius qui corrupti repellat sunt architecto nam quam possimus. Adipisci, eligendi odio mollitia sit ab iusto animi natus provident atque distinctio aliquam in unde, odit excepturi rerum quaerat fugit repellendus hic quibusdam ipsa assumenda? Exercitationem sed voluptatibus doloribus numquam incidunt at deserunt cupiditate unde dolor inventore illo tempore ea repellat tenetur atque quaerat enim alias, fugit ab, explicabo molestiae nostrum deleniti. Saepe soluta tempora dolor eius excepturi omnis nobis rerum eos.
      </div>
    </div>
    
    
    
  </div>
</template>

<style></style>
