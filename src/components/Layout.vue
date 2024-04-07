<script setup>

</script>
<template>
<div class="grid grid-cols-6 grid-rows-4  h-screen">
  <div class="col-start-1 col-end-2 row-span-4">
 <slot name="sidebar" ></slot>
  </div>
   <div class="col-start-2 col-span-5 row-span-3">
 <slot name = "chat"></slot>
   </div>
   <div class="col-start-2 col-end-7 row-span-3 item">
     <slot name = "input-chat" class="col-start-4 col-end-6 row-span-3"></slot>

   </div>
 
 
</div>

</template>
<style>

</style>