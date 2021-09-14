<template lang="html">
  <div class="">
  <header-app></header-app>
  <div class="w3-content w3-margin-top" style="max-width:1600px">

  <div class="w3-row w3-padding w3-border">
    <div class="w3-col l8 s12">
      <div class="w3-container w3-white w3-margin w3-padding-large">
        <div class="w3-justify">
          <h1>Everything About Artificial Intelligence</h1>
          <hr>
          <p>Artificial Intelligence enables machines and computers to analyze data and empowers them to make decisions based on the data they have. It is divided into three different parts, narrow AI, general AI, and Super AI. Today, in this article, we are going to discuss different advantages, disadvantages, and other important areas of artificial intelligence. Read this article and get the detailed information now!</p>
          <h2>Advantages of artificial intelligence</h2>
          <ul>
          <li>AI reduces the time taken to perform and complete a task</li>
          <li>AI enables humans to perform a complex task in just a few seconds</li>
          <li>AI reduces the total cost required to make a product</li>
          <li>An AI machine works 24*7 without any interruption, it requires very less amount for maintenance</li>
        </ul>
        <h2>Dis-advantages of AI</h2>
        <ul>
          <li>
            The implementation of an AI machine costs a lot of investment
          </li>
          <li>It may reduce employment</li>
          <li>AI lacks creativity and it does not improve with experience</li>
          <li>An AI model requires a lot of data for training, in some circumstances, it might get difficult to get such a huge amount of data</li>
        </ul>
        <h2>Implementation of AI</h2>
        <ul>
          <li>Speech Recognition:</li>
          <p>Who does not know about Alexa? Alexa is a perfect example of a speech recognition machine. If you haven't then you can just perform a voice search on Google. Yes, for the last couple of years, Google has been using Artificial intelligence for voice search recognition.</p>
          <li>Natural Language Processing</li>
          <p>Natural language processing is a sub-field of Artificial intelligence which is introduced for the interaction between humans and computers. Along with that, Google just rolled out an update a few years back called "BERT Update." In this BERT update, Google used natural language processing heavily. Google received a huge number of positive reviews after this update.</p>
          <li>Machine Learning/Deep Learning</li>
          <p>Just like NLP, machine learning and deep learning are the sub-fields of Artificial Intelligence. Most engineers use AI to train the model of Machine learning and deep learning. This is one of the most basic implementations of Artificial Intelligence for various banks and financial areas to differentiate tens of thousands of entries. Along with that many other weather apps also use AI to predict the weather based on the information they have.</p>
          <li>Used in the Game Development</li>
          <p>For the evolution of the gaming industry, Artificial Intelligence is one of the major reasons. Almost all the games that you play today are developed with the help of an AI algorithm. One of the best examples of AI implementation in the games is nothing but Chess. The standards of Chess around the world have increased after players started playing chess with the machine.</p>
          <li>Used in the Defence</li>
          <p>Many advanced missile defense systems use AI to predict the spot where a missile is going to drop. If the AI algorithm finds that the machine might land in a crowded area then the defense system destroys it in the air. One of the best examples of AI in defense is Iron Dome from Israel and S-400 from Russia.</p>
          </ul>
          <p>So, these are the top best implementation of Artificial Intelligence along with the advantages and disadvantages. After reading this article, if you have any information to share then do contact us. We would be glad to post your information.</p>
              </div>
      </div>
    <!-- About/Information menu -->

  <!-- END GRID -->
  </div>
<div class="w3-padding w3-margin-top">
  <h2>Other Posts</h2>
<a href="/best-javascript-frameworks">Best Javascript Frameworks</a><br>
<a href="/best-github-projects">Best GIThub Projects</a>
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
  title: 'Introduction to AI',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  // meta tags
  meta: [
      { hid: 'description', name: 'description', content: 'An introduction to Artificial Intelligence'}
  ],
  link: [
 {rel: 'canonical', href: 'https://lantechinfocom.co.in/introduction-to-artificial-intelligence'}
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
