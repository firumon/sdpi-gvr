<template>
  <CardContent :page="page" :max="max" @back="$emit('back',collection)" @proceed="$emit('proceed',collection)">
    <q-select label="സ്ത്രീ/പുരുഷൻ" outlined v-model="collection.Gender" :options="['പുരുഷൻ','സ്ത്രീ']" />
    <q-input label="ജനിച്ച വർഷം" outlined v-model.number="collection.YOB" type="number" />
    <q-select label="ബ്ലഡ് ഗ്രൂപ്പ്" outlined v-model="collection.Blood" :options="['A+','A-','B+','B-','AB+','AB-','O+','O-']" />
  </CardContent>
</template>


<script setup>
import CardContent from "components/Gathering/CardContent.vue";
import {reactive} from "vue";

defineProps(['page','max'])
defineEmits(['back','proceed'])

const collection = reactive({ Gender:'പുരുഷൻ',YOB:null,Blood:'A+'})
</script>
