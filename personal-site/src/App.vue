<template>
  <div class="page">
    <header>
      <CoolNameComponent />
      <nav>
        <router-link to="/bio">Bio</router-link>
        <router-link to="/obamahedron">Obamahedron</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script setup lang="ts">

import CoolNameComponent from './components/CoolNameComponent.vue';


</script>

<style>

@font-face {
  font-family: Rubik-Light;
  src: url('~@/assets/fonts/Rubik-Light.ttf');
}
@font-face {
  font-family: Rubik-Medium;
  src: url('~@/assets/fonts/Rubik-Medium.ttf');
}
@font-face {
  font-family: Rubik-Bold;
  src: url('~@/assets/fonts/Rubik-Bold.ttf')
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Rubik-Light, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #576065;
  background-color: whitesmoke;

  padding-left: 20px;
  padding-right: 20px;
}

.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  display: flex;

  align-items: center;
  justify-content: space-between;
}

nav {
  padding: 30px;
  font-size: 20px;

  display: flex;
  gap: 100px;

  margin-right: 100px;
}

nav * {
  text-decoration: none;
  color: #576065;

}

nav *:hover {
  text-decoration: underline;
  color: black;
}

nav *.router-link-exact-active {
  text-decoration: underline;
  color: #50C878;
}
</style>
