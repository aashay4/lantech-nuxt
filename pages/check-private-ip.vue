<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Check Private IP</h1>
          <hr>
          <p>A private IP is nothing but the computer address on the internet protocol that uses private address space on the internet. These private IP address are used in the residential, office, enterprise and local area networks. Both commonly used versions of IP address, IPv4 and IPv6 are termed in the private IP addres. Here is the private IP address checker that helps you to determine an inserted IP is private address or not.</p>
          <div class="w3-hover-shadow w3-panel w3-card w3-leftbar w3-light-grey" style="height: 376px;"><br>
                    <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter the MAC Address"/><br><br>
                    <button v-on:click="wakeonlan()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Check Private IP</button>
                    <button v-on:click="reset()" class="w3-button w3-border w3-amber w3-padding-large w3-hover-gray" style="display: inline-block">Reset</button><br><br>
                    <div class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; height: 110px; overflow: scroll;"><b>Response:</b> {{ answer }}</div><br><br>
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
  title: 'Private IP check',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Check private IP'}
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/check-private-ip'}
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

var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if(regex.test(mystring) === true)
  {
    await this.$axios.$post('/api/cpi', {
            input: this.text_value
          })
          .then((response) => {
            console.log(response)
           this.answer = response;
         })
}
else{
  alert("Please enter a valid IP address")
}
  }
}
}
</script>

<style lang="css">
</style>
