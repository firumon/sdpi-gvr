<template>
  <CardContent :page="page" :max="max" @back="$emit('back',collection)" @proceed="$emit('proceed',collection)" @complete="$emit('complete',collection)">
    <q-select label="അംഗത്വം" outlined v-model="collection.Membership" :options="memberships" />
    <q-select label="പഞ്ചായത്ത്/മുൻസിപ്പാലിറ്റി" outlined v-model="collection.LB" :options="LBs" />
    <q-select label="ബ്രാഞ്ച്" outlined v-model="collection.Branch" :options="Branches" v-if="branch_need" />
    <q-input label="പ്രവാസലോകത്തെ സ്ഥലം" outlined v-model="collection.Place" v-else-if="collection.Membership === memberships[2]" />
    <q-input label="സ്ഥലം" outlined v-model="collection.Place" v-else-if="collection.Membership === memberships[3]" />
  </CardContent>
</template>

<script setup>
import CardContent from "components/Gathering/CardContent.vue";
import {computed, reactive} from "vue";

const props = defineProps(['page','max','committees'])
const emits = defineEmits(['back','proceed','cadre','complete'])

const collection = reactive({ LB:null,Branch:null,Membership:'കേഡർ',Place:'' })
const memberships = ['കേഡർ','മെമ്പർ','പ്രവാസി','അനുഭാവി']
const branch_need = computed(() => {
  let idx = memberships.indexOf(collection.Membership);
  if(idx > 1) collection.Branch = null;
  emits('cadre',collection.Membership === memberships[0])
  return idx < 2
})
const LBs = computed(() => Object.keys(props.committees || {}))
const Branches = computed(() => (collection.LB && props.committees.hasOwnProperty(collection.LB)) ? props.committees[collection.LB] : [])
</script>
