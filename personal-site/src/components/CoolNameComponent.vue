<template>
  <h1 @mouseover="alternateTypeEffect">
    {{ displayName }}{{ blinkingBar }}
  </h1>
</template>

<script setup lang="ts">

import { ref, computed, onMounted } from "vue";

const displayName = ref<string>("Seungwoo Choi");

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

const alternate = ref<boolean>(false);
async function alternateTypeEffect() {
  if (isTyping.value || isFinished.value ) return;

  await eraseEffect();

  isTyping.value = true;

  if (alternate.value) {
    await typeEffectEnglish();
  } else {
    await typeEffectKorean();
  }
  alternate.value = !alternate.value;

  isTyping.value = false;
}

async function typeEffectEnglish() {
  const literalName = "Seungwoo Choi";

  for (let c of literalName) {
    displayName.value = displayName.value.concat(c);
    await delay(randomInteger(30, 50));
  }
}

/**
 * I'm sorry, I cheated with this effect :) 
 * I don't feel like reinventing the Korean keyboard...
 */
async function typeEffectKorean() {
  var sequences = [
    ['ㅊ', '초', '최'], 
    ['ㅅ', '스', '승'], 
    ['ㅇ', '우'],
  ];

  for (let i = 0; i < sequences.length; i++) {
    let current = sequences[i];
    for (let c of current) {
      displayName.value = displayName.value.substring(0, i).concat(c);
      await delay(randomInteger(30, 50));
    }
  }
}

async function eraseEffect() {
  isTyping.value = true;
  while(displayName.value) {
    displayName.value = displayName.value.substring(0, displayName.value.length - 1);
    await delay(30);
  }
}
  
</script>

<style>

h1 {
  font-size: 40;
  min-width: 30%;
  cursor: default;
}

</style>