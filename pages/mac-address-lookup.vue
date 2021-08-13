<template>
  <div class="">
      <div class="">
          <h1>SEO Page Checker</h1>
          <button type="button" name="button" v-model="address" @click="register()">Send domain</button>
          <button type="button" name="button" @click="updateProfile()">Check API</button>
          <h1>MACaddress: {{ macaddress }}</h1><br><br>
          <h1>IPV4: {{ ipv4 }}</h1><br><br>
          <h1>IPV6: {{ ipv6 }}</h1>
      </div>
      </div>
</template>
<script>
import socket from '~/plugins/socket.io.js'
export default {
  head() {
  // sets document title
  return {
  title: 'Website SEO Checker',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: ''},
      { hid: 'robots', name: 'robots', content: 'nofollow,noindex'}
  ],
  link: [
  {rel: 'canonical', href: 'https://seojs.co/seo-checker'}
  ]
  }
  },
  data() {
    return {
      address: 'https://www.yudiz.com',
      macaddress: '',
      ipv4: '',
      ipv6: ''
      }
    },
  beforeMount(){
    socket.on('showmac', (address) => {
      console.log("RObots found: " + address);
    })
  },
  methods: {
    updateProfile() {
    // TIP use this.model to send it to api and perform register call
    this.$axios.post('/api/sites')
      .then((response) => {
        this.macaddress = response.data.["Wi-Fi"].mac;
        this.ipv4 = response.data.["Wi-Fi"].ipv4;
        this.ipv6 = response.data.["Wi-Fi"].ipv6;
      })
      .catch( (error) => {
        console.log(error)

      });
},
    register() {

        if(this.address.includes("http")){
          socket.emit('findmac', this.address);
      }
      else{
        this.model.domain = "http://" + this.model.domain;
    socket.emit('seo-checker', this.address);
      }
    }
    }
  }
</script>
<style>
.card .alert {
  position: relative !important;
  width: 100%;
}
.underline {
    text-decoration: underline;
}
</style>
