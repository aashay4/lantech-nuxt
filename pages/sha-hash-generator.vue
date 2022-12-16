<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>SHA Hash generator</h1>
          <hr>
          <p>SHA-1, SHA-256, and SHA-512 generator.</p>
          <Adsense
        class="adsbygoogle infeed"
        style="display:block"
        data-ad-client="ca-pub-6829148792481216"
        data-ad-slot="4199493091"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </Adsense><br>
      <div>
        <h2 style="color: teal">SHA-1 Generator</h2>
      </div>
          <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 376px;"><br>
                    <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a String"/><br><br>
                    <button v-on:click="sha1create()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">SHA-1 Hash generator</button>
                    <button v-on:click="reset()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Response:</b> {{ answer }}</div><br><br>
                    </div>
                    <h2 style="color: teal">SHA-256 Generator</h2>
                    <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 820px;"><br>
                              <input type="text" v-model="text_value1" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a String"/><br><br>
                              <button v-on:click="sha256create()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">SHA-256 Hash generator</button>
                              <button v-on:click="reset1()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                              <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 150px; overflow: scroll;"><b>Single-HASH:</b> {{ answer4 }}</div><br><br>
                              <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 150px; overflow: scroll;"><b>Double-HASH:</b> {{ answer1 }}</div><br><br>
                              <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 150px; overflow: scroll;"><b>HASH As BYTES:</b> {{ answer2 }}</div><br><br>
                              <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 150px; overflow: scroll;"><b>HASH As STRING:</b> {{ answer3 }}</div><br><br>
                              </div>
                              <div class="">
                                <h2 style="color: teal">SHA-512 Generator</h2>
                              </div>
                              <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 460;"><br>
                                        <input type="text" v-model="text_value2" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a String"/><br><br>
                                        <button v-on:click="sha512create()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">SHA-512 Hash generator</button>
                                        <button v-on:click="reset2()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                                        <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 150px; overflow: scroll;"><b>SHA-512:</b> {{ answer5 }}</div><br><br>
                                        </div>
        </div>
      </div>

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
  title: 'SHA-1 Hash generator',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'SHA-1 Hash generator' }
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/sha-1-hash-generator'}
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
    text_value1: '',
    answer4: '',
    answer1: '',
    answer2: '',
    answer3: '',
    text_value2: '',
    answer5: ''
  }
},
methods: {
  async sha512create(){
    await this.$axios.$post('/api/sha512', {
            input: this.text_value2
          })
          .then((response) => {
            this.answer5 = response;
         })
  },
  reset2(){
    this.answer5 = '';
    this.text_value2 = '';
  },
  reset1(){
    this.answer4 = '';
    this.text_value1 = '';
    this.answer1 = '';
    this.answer2 = '';
    this.answer3 = '';
  },
  reset(){
    this.answer = '';
    this.text_value = '';
  },
  async sha256create(){
    await this.$axios.$post('/api/sha256', {
            input: this.text_value1
          })
          .then((response) => {
            console.log(response[1])
           this.answer4 = response[0];
           this.answer1 = response[1];
           this.answer2 = response[2];
           this.answer3 = response[3];
         })
  },
  async sha1create(){
    await this.$axios.$post('/api/sha1', {
            input: this.text_value
          })
          .then((response) => {
            console.log(response)
           this.answer = response
         })
  }
}
}
</script>

<style lang="css">
</style>
