<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Network Checkup</h1>
          <hr>
          <p>Network check up tool.</p>
          <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 376px;"><br>
                    <button v-on:click="wakeonlan();wakeonlan1();wakeonlan2();wakeonlan3();" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Network Check Up</button>
                    <button v-on:click="reset()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Response:</b> {{ answer }}</div><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Response:</b> {{ answer1 }}</div><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Response:</b> {{ answer2 }}</div><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Response:</b> {{ answer3 }}</div><br><br>
                    </div>
        </div>
      </div>
    <!-- About/Information menu -->

  <!-- END GRID -->
  </div>
<div class="w3-padding w3-margin-top">
  <h2>Other Posts</h2>
<a href="/wake-on-lan">Wake on LAN</a><br>
<a href="/configure-layer-3-switch">Configure layer 3 Switch</a>
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
  title: 'Check the network',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Network checkup'}
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/network-checkup'}
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
    answer: '',
    answer1: '',
    answer2: '',
    answer3: ''
  }
},
methods: {
  reset(){
    this.answer = '';
    this.text_value = '';
  },
  async wakeonlan(){

    await this.$axios.$post('/api/get_public_ip', {
          })
          .then((response) => {
            console.log(response)
           this.answer = response;
         })
  },
  async wakeonlan1(){

    await this.$axios.$post('/api/get_private_ip', {
          })
          .then((response) => {
            console.log(response)
           this.answer1 = response;
         })
  },
  async wakeonlan2(){

    await this.$axios.$post('/api/get_gateway_ip', {
          })
          .then((response) => {
            console.log(response)
           this.answer2 = response;
         })
  },
  async wakeonlan3(){

    await this.$axios.$post('/api/get_interfaces_list', {
          })
          .then((response) => {
            console.log(response)
           this.answer3 = response;
         })
  }
}
}
</script>

<style lang="css">
</style>
