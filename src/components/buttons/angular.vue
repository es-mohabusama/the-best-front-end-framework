<template>
  <div>
    <button type="button" class="btn btn-default" @click="choseAngular" :disabled="isClicked">Angular forever</button>
 </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false
    }
  },
  props: ['currentlyClicked'],
  watch: { 
      currentlyClicked: function(newVal, oldVal) {
        if(newVal != 'ang') {
          this.isClicked = false
        } else {
          this.isClicked = true
        }
    }
  },
  methods:{
    choseAngular: function() {
        this.isClicked = true
        this.$emit('onAgularClicked', 'src/assets/angular.png')
    }
  }
}
</script>

<style scoped>
</style>
