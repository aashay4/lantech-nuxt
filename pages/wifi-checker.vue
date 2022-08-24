<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Check wifi information</h1>
          <hr>
          <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 550px;"><br>
                    <button v-on:click="wakeonlan()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Get wifi information</button>
                    <button v-on:click="reset()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 220; overflow: scroll;"><b>Response:</b> {{ answer }}</div><br><br>
                    </div>
        </div>
      </div>
    <!-- About/Information menu -->

  <!-- END GRID -->
  </div>
<div class="w3-padding w3-margin-top">
  <h2>Other Posts</h2>
<a href="/configure-layer-3-switch">Configure layer 3 Switch</a><br>
<a href="/check-private-ip">Check Private IP</a>
</div>
<!-- END w3-content -->
</div>

  <footer-app></footer-app>
</div>
</div>
</template>

<script>
import footer from '@/components/footer.vue'
import contactsection from '@/components/contactsection.vue'
import header from '@/components/header.vue'
export default {
  head() {
  // sets document title
  return {
  title: 'Check information of a Wi-fi',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Wifi checker' }
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/wifi-checker'}
]
}
},
components: {
  'footer-app': footer,
  'contactsection': contactsection,
  'header-app': header
},
data (){
  return {
    text_value: '',
    answer: ''
  }
},
methods: {
  reset(){
    this.answer = '';
    this.text_value = '';
  },
  async wakeonlan(){
    await this.$axios.$post('/api/wc', {
            input: this.text_value
          })
          .then((response) => {
           this.answer = response;
         })

  }
}
}
</script>

<style lang="css">
</style>
