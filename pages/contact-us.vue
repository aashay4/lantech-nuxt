<template lang="html">
  <div class="">
    <header-app></header-app>
    <contactsection></contactsection>
      <footer-app></footer-app>
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
  title: 'Contact us',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Contact us - Lantech Infocom' }
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/contact-us/'}
]
}
},
  components: {
  'footer-app': footer,
  'contactsection': contactsection,
  'header-app': header
}
}
</script>

<style lang="css">
</style>
