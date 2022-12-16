<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>md5 hash generator</h1>
          <hr>
          <Adsense
        class="adsbygoogle infeed"
        style="display:block"
        data-ad-client="ca-pub-6829148792481216"
        data-ad-slot="4199493091"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </Adsense><br>
          <p></p>
          <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 460;"><br>
                    <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a String"/><br><br>
                    <button v-on:click="sha1create()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">md5 hash generator</button>
                    <button v-on:click="reset()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 150px; overflow: scroll;"><b>MD5-HASH:</b> {{ answer }}</div><br><br>
                    <!--<img v-if="showpic" :src="getImgUrl(imglink1)" alt="Insta" />-->
                    <img v-if="showpic" :src="mimeTypeUrl(imglink1)" />

                    {{imglink1}}
                    </div>
        </div>
      </div>
              <div class="w3-padding">
                <h1 class="w3-center">How does md5 hash generator Works?</h1>
                <p></p>
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
  title: 'Get instagram profie picture',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Instagram profile picture getter' }
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/get-insta-profie-pic'}
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
    showpic: false,
    text_value: '',
    answer: '',
    answer1: '',
    answer2: '',
    answer3: '',
    imglink: '',
    imglink1: '',
    imglink2: ''
  }
},
methods: {
  mimeTypeUrl(imglink1) {
  //  var images = require.context('../images/', false, /\.png$/)
  //return require('../images/'+imglink1)
  return require('../images/'+imglink1);
 },
  reset(){
    this.answer = '';
    this.text_value = '';
    this.answer1 = '';
    this.answer2 = '';
    this.answer3 = '';
  },
  async sha1create(){
    await this.$axios.$post('/api/gipc', {
            input: this.text_value
          })
          .then((response) => {
            console.log(response)
            this.imglink2 = response;
          //  this.showpic = true;
          alert(this.imglink2)
           this.sampletest();
         })
  },
  sampletest(){
    //setTimeout(function(){
    alert("it")
    this.imglink1 = this.imglink2;
    //this.picshowing();
    this.showpic = true;
    alert(this.showpic)
  //}, 1500)
},
  picshowing(){
    alert("In picshoing: " + this.imglink1)
    //this.imglink = require('~/assets/'+this.imglink1)
    //alert(this.imglink)

  }
  }
}
</script>

<style lang="css">
</style>
