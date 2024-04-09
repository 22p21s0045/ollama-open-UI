<script setup>
import InputChat from '../components/InputChat.vue'
import Chat from '../components/Chat.vue'
import Layout from "@/components/Layout.vue";
import Sidebar from "@/components/Sidebar.vue";
import ChatVue from '@/components/Chat.vue';
import { ChatManager } from '../../lib/ChatManager';
import { reactive, ref, toRef, watch } from 'vue';
const manager = reactive(new ChatManager())
const historys = toRef(manager, 'historys')

// watch( historys ,(newHistory)=>{
//   console.log("Watch execute");
//   console.log(newHistory)
//   console.log(historys.value);
// },{deep:true})
const handleSentMessage = (value)=>{
  console.log(value + "Parent receive yet");
  manager.sentChat(value)
}
</script>

<template>
  <Layout>
    <template #sidebar>
      <Sidebar />
    </template>
    <template #chat>
      <Chat :history="historys"/>
    </template>
    <template #input-chat>
      <InputChat @sent-message = "handleSentMessage"/>
    </template>
  </Layout>
</template>
