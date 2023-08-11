<template>
  <div class="container">
    <div class="content">
      <p>മണ്ഡലത്തിലെ മുഴുവൻ പ്രവർത്തകരുടെ ഡാറ്റ പുതുക്കുന്നതിനും പുനഃക്രമീകരിക്കുന്നതിനും വേണ്ടിയുള്ള സംവിധാനമാണിത്. പ്രവർത്തകർ അവരവരുടെ ഡീറ്റെയിൽസ് നൽകി ഈ പ്രക്രിയയുടെ ഭാഗമാകണമെന്ന് അഭ്യർത്ഥിക്കുന്നു.
        <br>പേര്, ഫോൺ നമ്പർ, സ്ത്രീ/പുരുഷൻ, ജനിച്ച വർഷം, ബ്ലഡ് ഗ്രൂപ് തുടങ്ങിയ അടിസ്ഥാന വിവരങ്ങളെ നൽകേണ്ടതുള്ളൂ..</p>
      <p>വെറും 2 മിനുറ്റ് സമയമേ ഇതിനു വേണ്ടി വരുകയുള്ളൂ, ആത്മാർത്തതയോടും അഭിമാനത്തോടും കൂടി ഇതിൽ പങ്കാളിയാവുക, പാർട്ടിയുടെ ഉന്നമനത്തിനു വേണ്ടി അഹോരാത്രം പ്രവർത്തിക്കുന്ന ഒരു പ്രവർത്തക്കനും  ഉത്തമ പൗരനുമാകാൻ കഴിയട്ടേ എന്നാശംസിക്കുന്നു, അതിനായി പ്രാർത്ഥിക്കുന്നു..</p>
      <p class="text-right q-mr-md text-bold">ഗുരുവായൂർ മണ്ഡലം പ്രസിഡൻറ് <br> യഹിയ മന്നലാംകുന്ന്</p>
      <div class="text-right q-mr-md q-mb-lg">
        <transition enter-active-class="animated bounceIn">
          <q-btn label="തുടരുക.." icon-right="forward" color="secondary" padding="md" v-if="!loading && !error" @click="$emit('proceed')" />
          <div class="text-danger text-bold" v-else-if="!loading && error">സർവറിൽ എന്തോ തകരാറ് ഉള്ളതായി തോന്നുന്നു.. കുറച്ചു കഴിഞ്ഞു വീണ്ടും സന്ദർശിക്കൂ, പ്ലീസ് ..</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['proceed'])
defineProps(['loading','error'])
</script>


<style>
.container {
  background: url("/flag.png") left top no-repeat;
  padding: 85px 0px 0px 40px;
}
.content {
  width: calc(100vw - 50px);
}
</style>

