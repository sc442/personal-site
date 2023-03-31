<template>
  <div class="center">
    <img src="@/assets/Obamahedron.jpeg">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ObamaView',
  
});
</script>

<style scoped>
.center {
  display: flex;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;
}

img {
  height: 200px;
  margin-top: 200px;
}

img:hover {
  scale: 2;
  transition: scale 0.5s;
}


</style>
