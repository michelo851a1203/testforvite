<script setup lang="ts">

</script>

<template>
  <div
    class="flex items-center space-x-4"
  >
    <router-link
      class="rounded-full px-3 py-2 no-underline shadow-lg border border-gray-300 bg-blue-300"
      :to="{ name: 'Home' }"
    >
      Home
    </router-link>
    <router-link 
      class="rounded-full px-3 py-2 no-underline shadow-lg border border-gray-300 bg-blue-300"
      :to="{ name: 'UserInfo' }"
    >
      UserInfo
    </router-link>
  </div>
  <router-view></router-view>
</template>
