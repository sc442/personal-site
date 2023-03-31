<template>
  <h1 @mouseover="alternateTypeEffect">
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
  for (let c of literalName) {
    displayName.value = displayName.value.concat(c);
    await delay(randomInteger(30, 50));
  }
}

async function typeEffectKorean() {
  var sequence1 = ['ㅊ', '초', '최'];
  var sequence2 = ['ㅅ', '스', '승'];
  var sequence3 = ['ㅇ', '우'];
  var sequences = [sequence1, sequence2, sequence3];

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
  height: 100px;
  width: 1000px;
  cursor: default;
}

</style>