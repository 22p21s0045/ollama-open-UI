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
const processMarkdown = computed(()=>{
  return md.render("Certainly! Here is an example of a simple JavaScript function that takes in a number and returns its square:\n```\nfunction square(num) {\n  return num * num;\n}\n\nconsole.log(square(5)); // Output: 25\n```\nIn this code, the `square` function takes in a single argument called `num`, which is passed into the function as an argument. The function then multiplies the value of `num` by itself (i.e., `num * num`) and returns the result.\n\nYou can also define a function with multiple arguments like this:\n```\nfunction addMultipleNumbers(a, b, c) {\n  return a + b + c;\n}\n\nconsole.log(addMultipleNumbers(3, 4, 5)); // Output: 12\n```\nIn this code, the `addMultipleNumbers` function takes in three arguments called `a`, `b`, and `c`. The function then adds all of these values together and returns the result.\n\nYou can also use a function to perform more complex operations, such as calculating the area of a circle or finding the factorial of a number. Here is an example of a JavaScript function that calculates the area of a circle:\n```\nfunction areaOfCircle(radius) {\n  return Math.PI * radius ** 2;\n}\n\nconsole.log(areaOfCircle(5)); // Output: 78.53981633974483\n```\nIn this code, the `areaOfCircle` function takes in a single argument called `radius`, which is passed into the function as an argument. The function then uses the mathematical formula for the area of a circle (`Math.PI * radius ** 2`) to calculate the area of the circle and returns the result.\n\nI hope these examples give you a better idea of how functions work in JavaScript! Let me know if you have any questions or need further clarification.")

  
})
watch(processMarkdown,(newValue) =>{
    hljs.highlightAll();
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
            <div v-html=" marked.parse(history.response.content)"></div>
         
            <div v-html="processMarkdown"></div>
            {{console.log(processMarkdown)}}
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
