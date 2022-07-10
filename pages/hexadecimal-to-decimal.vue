<template>
  <div>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Hexadecimal to Decimal Converter</h1>
          <Adsense
        class="adsbygoogle infeed"
        style="display:block"
        data-ad-client="ca-pub-6829148792481216"
        data-ad-slot="4199493091"
        data-ad-format="auto"
        data-full-width-responsive="true">
      </Adsense><br>
          <div class="w3-hover-shadow w3-panel w3-leftbar w3-light-grey" style="height: 500px;"><br>
          <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/><br><br>
          <button class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" v-on:click="hextodec(); hextobin();" style="width: 49%">Hexadecimal to Decimal</button>
          <button class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" v-on:click="reset()" style="width: 49%">Clear</button><br><br>
          <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; overflow: scroll">Conversion: {{ ans }}</p>
          <h3><b>({{ text_value }}) to binary</b></h3>
          <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; overflow: scroll"><b>Conversion:</b> {{ ansbin }}</p>
        </div>
        </div><br>
      </div>
      </div>
</div>
</template>

<script>
import footer from '~/components/footer.vue';
import { BigNumber } from 'bignumber.js';

export default {
  head() {
  // sets document title
  return {
  title: '',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'noindex,nofollow' }
  ],
  link: [
  {rel: 'canonical', href: 'https://binarytotext.net/hexadecimal-to-decimal/'}
  ]
  }
  },
  components:{
    'footer-app': footer
  },
  data () {
    return {
      text_value: null,
            ans: "",
            ansbin: ''
    }
  },
  methods: {
    hextobin() {
      var hex = this.text_value;
      var x = new BigNumber(hex, 16);
      var dect = x.toString(2);
      this.ansbin = dect;
            },
    hextodec() {
    var x = new BigNumber(this.text_value, 16)
    var dectobin = x.toString(10);
    this.ans = dectobin;
     },
   reset() {
     this.ans = '',
     this.text_value= null,
     this.ansbin = ''
   },
  }
}
</script>

<style>
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
#box {
  background-color: lightgrey;
   width: 300px;
   border: 5px solid gray;
   padding: 10%;
   margin-left: 30%;

}
table, th, td {
  border: 1px solid black;
}
</style>
