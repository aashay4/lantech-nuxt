<template>
  <div>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-amber">Binary To Text</h1>
<binarytext />
<Adsense
class="adsbygoogle infeed"
style="display:block"
data-ad-client="ca-pub-6829148792481216"
data-ad-slot="4199493091"
data-ad-format="auto"
data-full-width-responsive="true">
</Adsense><br>
            <h1 class="w3-text-amber">Binary Translator</h1>
            <div>
            <binarytranslator />
          </div>
        </div><br>
            </div>
  </div>
</div>
</template>

<script>
import binarytext from '../components/binarytext.vue';
import binarytranslator from '../components/binarytranslator.vue';

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
 {rel: 'canonical', href: ''}
]
}
},
    components:{
    'binarytranslator': binarytranslator,
    'binarytext': binarytext
  },
  data() {
    return {
      elementVisible: false
    }
  },
  created() {
           setTimeout(() => this.elementVisible = true, 5000)
       }
}
</script>

<style>
#showMe {
  animation: cssAnimation 0s 5s forwards;
  visibility: hidden;
}

@keyframes cssAnimation {
  to   { visibility: visible; }
}
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
table, th, td {
  border: 1px solid black;
}
#box {
  background-color: lightgrey;
   width: 300px;
   border: 5px solid gray;
   padding: 10%;
   margin-left: 30%;

}
</style>
