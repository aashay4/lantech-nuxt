<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>SHA-1 Hash generator</h1>
          <hr>
          <Adsense
        class="adsbygoogle infeed"
        style="display:block"
        data-ad-client="ca-pub-6829148792481216"
        data-ad-slot="4199493091"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </Adsense><br>
          <p>SHA-1 is a widely used hash function that takes input and converts the user input into a 160-bit hash value. This output is represented in hexadecimal numbers.</p>
          <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 376px;"><br>
                    <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a String"/><br><br>
                    <button v-on:click="sha1create()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">SHA-1 Hash generator</button>
                    <button v-on:click="reset()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Response:</b> {{ answer }}</div><br><br>
                    </div>
        </div>
      </div>
              <div class="w3-padding">
                <h1 class="w3-center">How does SHA-1 Hash Generator Works?</h1>
                <p>The SHA-1 generator is used in cryptography. To use this SHA-1 generator, just enter the value that you want to convert in the text box and click on SHA-1 generate button and this tool will automatically generate the SHA-1 Hash for the given string.</p>
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
    answer: ''
  }
},
methods: {
  reset(){
    this.answer = '';
    this.text_value = '';
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
