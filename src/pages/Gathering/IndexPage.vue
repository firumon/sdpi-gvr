<template>
  <q-page class="flex flex-center page-background" padding>
      <transition :enterActiveClass="enterActiveClass" :leaveActiveClass="leaveActiveClass" mode="out-in">
        <KeepAlive>
          <Welcome v-if="!misc.page" @proceed="Next" :error="misc.error" :loading="misc.loading" />
          <Basic v-else-if="misc.page === 1" @proceed="Next" @back="Prev" :page="misc.page" :max="misc.max" :member="collection" />
          <Personal v-else-if="misc.page === 2" @proceed="Next" @back="Prev" :page="misc.page" :max="misc.max" :member="collection" />
          <LB v-else-if="misc.page === 3" @proceed="Next" @complete="Complete" @back="Prev" @cadre="Cadre" :page="misc.page" :max="misc.max" :member="collection" :committees="misc.committees" />
          <Leadership v-else-if="misc.page === 4" @proceed="Next" @complete="Complete" @back="Prev" :page="misc.page" :max="misc.max" :member="collection" />
        </KeepAlive>
    </transition>
  </q-page>
</template>

<script setup>
import Welcome from "components/Gathering/Welcome.vue";
import Basic from "components/Gathering/Basic.vue";
import Personal from "components/Gathering/Personal.vue";
import LB from "components/Gathering/LB.vue";
import Leadership from "components/Gathering/Leadership.vue";

import {computed, nextTick, reactive} from "vue";
import doGet from "assets/doGet";

const misc = reactive({ page:0,forward:true,max:4,loading:true,error:false,committees:{} })
const collection = reactive({ "Name":null,"Phone":null,"WhatsApp":null,"Gender":null,"YOB":null,"Blood":null,"LB":null,"Branch":null,"Place":null,"Membership":null,"Branch Committee":null,"LB Committee":null,"GVR Committee":null })

const enterActiveClass = computed(() => "animated " + (misc.forward ? 'bounceInRight' : 'bounceInLeft'))
const leaveActiveClass = computed(() => "animated " + (misc.forward ? 'bounceOutLeft' : 'bounceOutRight'))
function Prev(data){
  misc.forward = false
  for (const key in data) { collection[key] = data[key] }
  nextTick(() => misc.page--)
}
function Next(data){
  misc.forward = true
  for (const key in data) { collection[key] = data[key] }
  nextTick(() => misc.page++)
}

function Cadre(state){ misc.max = state ? 4 : 3 }
function Complete(data){
  misc.forward = false;
  for (const key in data) { collection[key] = data[key] }
  console.log('Completing Popup..');
  misc.page = 0
}

doGet('78dsf').then(Ary => {
  Ary.forEach(({ Branch,LB }) => {
    if(!misc.committees.hasOwnProperty(LB)) misc.committees[LB] = [];
    if(!misc.committees[LB].includes(Branch)) misc.committees[LB].push(Branch)
  })
  misc.loading = false
}).catch(message => {
  console.error(message); misc.error = true;
}).finally(() => misc.loading = false);
</script>

<style>
.page-background {
  background: url('/page-background.png') center no-repeat fixed;
  background-size: cover;
}
</style>
