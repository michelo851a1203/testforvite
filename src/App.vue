<script setup lang="ts">
  import MainTest from './components/MainTest.vue';

  const currentClick = (inputNumber: number) => {
    console.log(`input number : ${inputNumber}`);
  }

</script>

<template>
  <MainTest 
    @update:callbackClick="currentClick"
    buttonTitle="testClick"
    :timesNumber="2"
  ></MainTest>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
