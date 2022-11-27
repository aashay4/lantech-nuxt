<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Wake on LAN</h1>
          <hr>
          <Adsense
          class="adsbygoogle infeed"
          style="display:block"
          data-ad-client="ca-pub-6829148792481216"
          data-ad-slot="4199493091"
          data-ad-format="auto"
          data-full-width-responsive="true">
          </Adsense><br>
          <p>Wake a system on with our tool. All you need to wake a system is nothing but a MAC address. A MAC address is represented with a hexadecimal number. It is a unique identifier assigned to each electronics system. Once you find out the MAC address, just copy it and paste it into the text box. Once copied, click on the wake on LAN button to send a magic packet to the system.</p>
          <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 376px;"><br>
                    <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter the MAC Address"/><br><br>
                    <button v-on:click="wakeonlan()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Wake on LAN</button>
                    <button v-on:click="reset()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Response:</b> {{ answer }}</div><br><br>
                    </div>
        </div>
      </div>
              <div class="w3-padding">
                <h1 class="w3-center">How Wake on LAN Works?</h1>
                <p>The concept of wake on LAN is widely known to start a system with the help of LAN (local area network). When you enter the MAC address of the system and click on the send button, a magic packet is sent to the destination system which makes starts it from stand by or shutdown.</p>
                <h2>Which are Wake on LAN requirements?</h2>
                <p>There are a few requirements to wake a system up. Here they are:</p>
                <ul>
                  <li>
                    Make sure that the system is connected to the LAN(local area network) with the system from which the magic packet is being sent
                  </li>
                  <li>In order to use the wake on LAN concept, you should know the mac address of the system</li>
                </ul>
                <h2>About MAC Address?</h2>
                <p>As discussed above, a MAC Address is nothing but the unique identifier of a system which is represented in the hexadecimal number. To find out the MAC address of your computer system,</p>
                <ul>
                  <li>Open the Command prompt</li>
                  <li>Type <b><i>ipconfig/all</i></b></li>
                  <li>You shall be able to see the Physical address</li>
                </ul>
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
  title: 'Wake on LAN',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Wake on LAN' }
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/wake-on-lan'}
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

var regex = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;
  if(regex.test(mystring) === true)
  {
    await this.$axios.$post('/api/woll', {
            input: this.text_value
          })
          .then((response) => {
            console.log(response)
           this.answer = response + ' - Magic Packet successfully sent.'
         })
}
else{
  alert(this.text_value + " is not a MAC Address. A mac address is a 16-bit Hex number.")
}
  }
}
}
</script>

<style lang="css">
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
</style>
