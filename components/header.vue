<template lang="html">
  <div>
  <div class="w3-top">
  <div class="w3-bar w3-white w3-card" id="myNavbar">
    <router-link class="w3-bar-item w3-button w3-wide" to="/">HOME</router-link>
    <router-link class="w3-bar-item w3-button w3-wide" to="/blog">BLOG</router-link>
    <!-- Right-sided navbar links -->
      <!-- Hide right-floated links on small screens and replace them with a menu icon -->
  </div>
</div>

<!-- Sidebar on small screens when clicking the menu icon -->
</div>
</template>

<script>
export default {
  data() {
    return {
      isclose: false
  }
},
methods: {
  smalltoggle: function() {
    this.isclose = !this.close
  }
}
}
</script>

<style lang="css">
</style>
