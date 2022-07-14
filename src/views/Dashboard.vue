<script setup lang="ts">

</script>

<template>
  <div
    class="flex items-center"
  >
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'UserInfo' }">UserInfo</router-link>
  </div>
  <router-view></router-view>
</template>
