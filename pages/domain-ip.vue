<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Check Domain IP</h1>
          <hr>
          <p>A really simple app to check the domain IP address.</p>
          <Adsense
        class="adsbygoogle infeed"
        style="display:block"
        data-ad-client="ca-pub-6829148792481216"
        data-ad-slot="4199493091"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </Adsense><br>
          <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 450px;"><br>
                    <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter Domain Here"/><br><br>
                    <button v-on:click="wakeonlan1()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Check Domain IP</button>
                    <button v-on:click="reset()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 220px; overflow: scroll;"><b>Response:</b> {{ answer }}</div><br><br>
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
  title: 'Domain IP address checker',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Check Domain IP Address'}
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/domain-whois'}
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
    var mystring= this.text_value;

//var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    await this.$axios.$post('/api/wimip', {
            input: "this.text_value"
          })
          .then((response) => {
            console.log(response)
           this.answer = response;
         })
  },
  async wakeonlan1(){
    var mystring= this.text_value;

//var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    await this.$axios.$post('/api/wimip', {
            input: this.text_value
          })
          .then((response) => {
            console.log(response)
           this.answer = response;
         })
  }
}
}
</script>

<style lang="css" scoped>
@media (min-width: 350px) {
    .infeed {
      height: 290px;
    }
  }
 @media (min-width: 500px) {
    .infeed {
      height: 290px;
    }
  }
 @media (min-width: 800px) {
    .infeed {
      height: 290px;
    }
  }
</style>
