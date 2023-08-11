<template>
  <CardContent :page="page" :max="max" @back="$emit('back',collection)" @proceed="$emit('proceed',collection)">
    <q-input label="പേര്" outlined v-model="collection.Name" />
    <q-input label="ഫോൺ നമ്പർ" outlined v-model.number="collection.Phone" type="number" />
    <q-input label="വാട്സ്ആപ്പ് നമ്പർ" outlined v-model.number="collection.WhatsApp" type="number" @change="misc.change = true" />
  </CardContent>
</template>

<script setup>
import CardContent from "components/Gathering/CardContent.vue";
import {reactive, watch} from "vue";

defineProps(['page','max'])
defineEmits(['back','proceed'])

const misc = reactive({ change:false })

const collection = reactive({ Name:'',Phone:null,WhatsApp:null })
watch(() => collection.Phone,Phone => collection.WhatsApp = misc.change ? collection.WhatsApp : Phone)
</script>
