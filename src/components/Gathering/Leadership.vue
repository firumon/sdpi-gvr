<template>
  <CardContent :page="page" :max="max" @back="$emit('back',collection)" @proceed="$emit('proceed',collection)" @complete="$emit('complete',collection)">
    <q-select label="ബ്രാഞ്ച് കമ്മിറ്റി ഭാരവാഹിത്വം" outlined v-model="collection['Branch Committee']" :options="options.leadership" />
    <q-select :label="lbt+' കമ്മിറ്റി ഭാരവാഹിത്വം'" outlined v-model="collection['LB Committee']" :options="options.leadership" />
    <q-select label="മണ്ഡലം കമ്മിറ്റി ഭാരവാഹിത്വം" outlined v-model="collection['GVR Committee']" :options="options.leadership" />
  </CardContent>
</template>

<script setup>
import CardContent from "components/Gathering/CardContent.vue";
import {computed, reactive} from "vue";

const props = defineProps(['page','max','member'])
defineEmits(['back','proceed','complete'])

const options = reactive({
  leadership: ['ഒന്നുമില്ല', 'പ്രസിഡൻറ്', 'വൈസ് പ്രസിഡൻറ്', 'സെക്രട്ടറി', 'ജോയിൻറ് സെക്രട്ടറി', 'ട്രഷറർ', 'കമ്മറ്റി അംഗം'],
})
const collection = reactive({ "Branch Committee":'ഒന്നുമില്ല', "LB Committee":'ഒന്നുമില്ല', "GVR Committee":'ഒന്നുമില്ല' })
const lbt = computed(() => [].includes(props.member.LB) ? 'മുൻസിപ്പൽ' : 'പഞ്ചായത്ത്')
</script>
