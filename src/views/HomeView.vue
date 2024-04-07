<script setup>
import InputChat from '../components/InputChat.vue'
import Chat from '../components/Chat.vue'
import Layout from "@/components/Layout.vue";
import Sidebar from "@/components/Sidebar.vue";
import ChatVue from '@/components/Chat.vue';
const handleSentMessage = (value)=>{
  console.log(value + "Parent receive yet");
}
</script>

<template>
  <Layout>
    <template #sidebar>
      <Sidebar />
    </template>
    <template #chat>
      <Chat/>
    </template>
    <template #input-chat>
      <InputChat @sent-message = "handleSentMessage"/>
    </template>
  </Layout>
</template>
