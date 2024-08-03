<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <RouterLink to="/">
        <h1>WORDS GAME</h1>
      </RouterLink>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  border-bottom: 1px solid white;

  margin-bottom: 24px;
  padding: 16px 24px;
}
</style>
