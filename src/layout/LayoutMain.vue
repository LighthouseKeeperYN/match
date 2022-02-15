<template>
  <div class="h-full flex flex-col">
    <Header />
    <div class="h-full flex">
      <Navbar>01</Navbar>
      <main class="w-full h-full">
        <slot />
      </main>
    </div>
    <Footer class="mt-auto">03</Footer>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>

<style scoped scss>
</style>