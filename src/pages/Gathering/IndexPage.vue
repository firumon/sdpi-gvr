<template>
  <q-page class="flex flex-center page-background">
    <Welcome />
  </q-page>
</template>

<script setup>
import Welcome from "components/Gathering/Welcome.vue";
</script>

<style>
.page-background {
  background: url("page-background.png") center no-repeat;
  background-size: cover;
}
</style>
