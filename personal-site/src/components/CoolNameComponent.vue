<template>
  <h1 @mouseover="typeEffect" @mouseleave="eraseEffect">
    {{ displayName }}{{ blinkingBar }}
  </h1>
</template>

<script setup lang="ts">

import { ref, computed, onMounted, onUnmounted } from "vue";

const literalName = "Seungwoo Choi";
const displayName = ref<string>("");

const isBlinking = ref<boolean>(false);
onMounted(() => {
  setInterval(() => {
    isBlinking.value = !isBlinking.value
  }, 500);
})

const blinkingBar = computed<string>(() => {
  if (isTyping.value) {
    return "|";
  } else {
    return isBlinking.value ? "|" : "";
  }
})

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) ) + min;
} 

const isTyping = ref<boolean>(false);
const isFinished = ref<boolean>(false);

async function typeEffect() {
  if (isTyping.value || isFinished.value ) return;

  isTyping.value = true;
  for (let c of literalName) {
    displayName.value = displayName.value.concat(c);
    await delay(randomInteger(50, 150));
  }

  isTyping.value = false;
  isFinished.value = true;
}

async function eraseEffect() {
  if (isTyping.value || !isFinished.value ) return;

  isTyping.value = true;
  while(displayName.value) {
    displayName.value = displayName.value.substring(0, displayName.value.length - 1);
    await delay(30);
  }

  isTyping.value = false;
  isFinished.value = false;
}
</script>

<style>

h1 {
  font-size: 40;
  height: 100px;
  width: 1000px;
  cursor: default;
}

</style>