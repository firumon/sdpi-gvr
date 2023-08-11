<template>
  <q-card class="bg-transparent full-width" flat>
    <q-card-section class="page-no-sec q-pa-none q-my-sm"><div class="text-h5 text-bold text-white text-center page-no-div flex-center flex">{{ page }}/{{ max }}</div></q-card-section>
    <q-card-section class="q-gutter-y-sm bg-white"><slot /></q-card-section>
    <q-card-actions align="between" class="bg-grey-1">
      <q-btn icon="reply_all" @click="$emit('back')" color="warning" padding="md" round />
      <q-btn label="ഓക്കെ, submit ചെയ്യാം" color="primary" padding="md" @click="$emit('complete')" v-if="max === page" />
      <q-btn label="തുടരുക.." icon-right="forward" color="secondary" padding="md" @click="$emit('proceed')" v-else />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps(['page','max'])
defineEmits(['back','proceed','complete'])
</script>

<style>
.page-no-sec {
  height: 77px; overflow: hidden;
  background: url("/white-line.png") repeat-x center;
}
.page-no-div {
  height: 77px !important; overflow: hidden;
  background: url("/red-dot-xl.png") center no-repeat;
}
</style>
