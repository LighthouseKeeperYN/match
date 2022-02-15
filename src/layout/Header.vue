<template>
  <header class="border-b-2 px-10 py-6 flex justify-between">
    <div class="flex">
      <router-link to="/">
        <img
          src="../assets/icons/logo.svg"
          alt="Logo"
        >
      </router-link>
      <button class="mx-10">
        <img
          src="../assets/icons/menu-icon.svg"
          alt="Menu"
        >
      </button>
    </div>
    <div class="flex items-center">
      <div class="bg-orange text-4xl text-white p-3 rounded">
        JD
      </div>
      <p class="text-blue font-bold pl-4 pr-40">John Doe</p>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
</style>