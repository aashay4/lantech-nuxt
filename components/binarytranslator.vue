<template>
  <div class="w3-hover-shadow w3-panel w3-leftbar w3-light-grey" style="height: 1100px;"><br><br>
          <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/><br><br>
          <button v-on:click="binarytotext(); bintodec(); bintooct(); bintohex();" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">Convert</button>
          <button v-on:click="reset()" class="w3-button w3-border w3-teal w3-padding-large w3-hover-gray" style="display: inline-block">Reset All Fields</button><br><br>
            <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>To text Translation:</b> {{ ans }}</p><br><br><br><br>
            <h3><b>({{ text_value}}) to Dec - Base-10</b></h3>
              <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Translation:</b> {{ btod }}</p>
              <h3><b>({{ text_value}}) to Oct - Base-8</b></h3>
                <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Translation:</b> {{ btoo }}</p>
                <h3><b>({{ text_value}}) to Hex - Base-16</b></h3>
                  <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Translation:</b> {{ btoh }}</p>
        </div>
</template>

<script>
import { BigNumber } from 'bignumber.js'

export default {

  components: {
  },
  data () {
    return {
      text_value: null,
      ans: '',
      aaa: null,
      btod: null,
      btoo: '',
      xxx: null,
      btoh: '',
      fa: null
    }
  },
  methods: {
    binarytotext () {
      var bintext, textresult = '', binlength
      this.aaa = this.text_value
      bintext = this.aaa.replace(/[^01]/g, '')
      binlength = bintext.length - (bintext.length % 8)
      for (var z = 0; z < binlength; z = z + 8) {
        textresult += String.fromCharCode(parseInt(bintext.substr(z, 8), 2))
        this.ans = textresult
      }
    },
    bintodec () {
      this.fa = parseInt(this.text_value)
      var cc = new BigNumber(parseInt(this.text_value, 2))
      if (isNaN(cc)) {
        this.btod = 'This number cannot be converted into Decimal'
      } else {
        this.btod = cc
      }
    },
    bintooct () {
      this.xxx = parseInt(this.text_value)
      var bintooct = parseInt(this.xxx, 2).toString(8)
      if (isNaN(bintooct)) {
        this.btoo = 'This number cannot be converted into Octal'
      } else {
        this.btoo = bintooct
      }
    },
    bintohex () {
      var binnn = this.text_value
      var mol = new BigNumber(binnn, 2)
      var binnx = mol.toString(16)
      if (isNaN(binnx)) {
        this.btoh = 'This number cannot be converted into Hex'
      } else {
        this.btoh = binnx
      }
    },
    reset () {
      this.ans = '',
      this.text_value = null,
      this.btod = '',
      this.btoo = '',
      this.btoh = ''
    }
  }
}
</script>

<style scoped>
#box {
  background-color: lightgrey;
   width: 300px;
   border: 5px solid gray;
   padding: 10%;
   margin-left: 30%;

}
</style>
