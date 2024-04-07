<script setup>
import { watch,ref, computed } from "vue"
const emit = defineEmits(['sent-message'])
const message = ref('')
const isCanSent = computed( () => {
    return message.value.trim().length !== 0
})

const handleSent = () =>{
    emit( 'sent-message', message.value)
    console.log("Message is sent");
    message.value = ''
}
</script>

<template>
  <div class="w-full h-full bg-blue-200">
<div class="flex flex-row gap-3 w-full h-full justify-center p-3 bg-black items-center">
    <textarea class="textarea w-full h-1/2" placeholder="type here" @keyup.enter="handleSent" v-model="message"></textarea>

    <button class="btn self-center" @click="handleSent" :disabled = '!isCanSent'>
        <i class="bi bi-send"></i>
    </button>
</div>
  </div>
</template>


<style>

</style>