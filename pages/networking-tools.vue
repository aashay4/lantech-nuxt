<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Blog</h1>
          <hr>
          <div class="">
            <section>
          <postpreview class="single-blog borderli" v-for="post in filteredPosts"
          :key="post.id"
          :title="post.title"
          :excert="post.previewText"
          :id="post.id" />
        </section>
          </div>
                </div>
              </div>

    <!-- About/Information menu -->

  <!-- END GRID -->
  </div>

<!-- END w3-content -->
</div>

  <contactsection></contactsection>
  <footer-app></footer-app>
</div>
</div>
</template>

<script>
import postpreview from '~/components/postpreview.vue';
import footer from '@/components/footer.vue'
import contactsection from '@/components/contactsection.vue'
import header from '@/components/header.vue'
export default {
  head() {
  // sets document title
  return {
  title: 'Networking and Communication Tools',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'Computer networking and technology tools with code explanation.' }
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/networking-tools'}
]
}
},
  components: {
  'footer-app': footer,
  'contactsection': contactsection,
  'header-app': header,
  'postpreview': postpreview
},
data() {
  return {
    networkmigra: '',
    email: '',
    phone: '',
    question: '',
    posts: [
      {
      title: 'Wake on LAN Tool',
      id: '/wake-on-lan'
    },
    {
      title: 'Check Private IP',
      id: '/check-private-ip'
    },
    {
      title: 'Binary to text',
      id: '/binarytotext'
    },
    {
      title: 'Hexadecimal to decimal',
      id: '/hexadecimal-to-decimal'
    },
    {
      title: 'Decimal to Hexadecimal',
      id: '/decimal-to-hexadecimal'
    },
    {
      title: 'QR Code Generator',
      id: '/qr-code-generator'
    }
],
search: ''
}
},
computed: {
  filteredPosts: function(){
    return this.posts.filter((post) => {
      return post.title.match(this.search);
    });
  }
}
}
</script>

<style lang="css">
</style>
