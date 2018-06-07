<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>Who is the best?</h1>
        <h3>Click the image to change it!</h3>
       <div class="btn-group btn-group-lg" role="group" aria-label="...">
         <angular @onAgularClicked="onAgularClicked" 
                  :currentlyClicked="clickedImage"/>
         <react   @onReactClicked="onReactClicked"
                  :currentlyClicked="clickedImage"/>
         <vuejs   @onVueClicked="onVueClicked"
                  :currentlyClicked="clickedImage"/>
       </div>
        <div @click="rotate">
          <img :src="url" class="img-fluid" alt="Responsive image">
        </div>
     </div>
   </div>
 </div>
</template>

<script>
import angular from './buttons/angular.vue';
import react from './buttons/react.vue';
import vuejs from './buttons/vuejs.vue';

export default {
  data() {
    return {
      clickedImage:'',
      imageNumber: 3,
      url: "src/assets/vuejs.png"
    }
  },
  components: {
    'angular':angular,
    'react':react,
    'vuejs':vuejs
  },
  mounted() {
  },
  methods:{
    onAgularClicked (value) {
      this.clickedImage = 'ang'
      this.url = value
    },
    onReactClicked (value) {
      this.clickedImage = 'rea'
      this.url = value
    },
    onVueClicked (value) {
      this.clickedImage = 'vue'
      this.url = value
    },
    rotate :function () {
      if(this.imageNumber == 3) {
        this.url = "src/assets/angular.png"
        this.clickedImage = 'ang'
        this.imageNumber = 1  
      }
      else if (this.imageNumber == 2) {
        this.url = "src/assets/react.png"
        this.clickedImage = 'rea'
        this.imageNumber = 3
      }
      else if (this.imageNumber == 1) {
        this.url = "src/assets/vuejs.png"
        this.clickedImage = 'vue'
        this.imageNumber = 2       
      }
    }
  }
}
</script>

<style scoped>
</style>
