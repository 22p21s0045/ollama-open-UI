<script setup>
import { computed, onMounted, watch } from "vue"
import markdownit from 'markdown-it'
import markdownItHighlight from 'markdown-it-highlightjs'
import { marked} from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';

const md = markdownit()
md.use(markdownItHighlight)
const props = defineProps({
  history: {
    type: Array,
    default: () => [],
    required: true,
  },
})

const histories = computed(() => {
  console.log("History recompute")
  return props.history
})
</script>
<template>
  <div class="w-full h-full max-h-fit flex flex-col gap-2 overflow-auto">
    <div
      class="max-h-fit w-full bg-black flex flex-row"
      alt="container"
      v-for="(history, index) in histories"
      :key="index"
    >
      <div class="avatar p-3 pt-6 max-h-28">
        <div class="w-12 max-h-12 rounded">
          <img
            src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="p-7 text-justify max-h-fit">
        <div>
          {{ history.request.content }}
        </div>
        <div v-if="history.response.content === ''">
          <span class="loading loading-ring loading-sm"></span>
        </div>
        <div v-else>
          <article class="prose">
            <div v-html=" md.render(history.response.content)"></div>
         
            
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
