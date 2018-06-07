<template>
  <div>
    <button type="button" class="btn btn-default" @click="choseReact" :disabled="isClicked">React is best</button>
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
        if(newVal != 'rea') {
          this.isClicked = false
        } else {
          this.isClicked = true
        }
    }
  },
  methods:{
    choseReact: function() {
        this.isClicked = true
        this.$emit('onReactClicked', 'src/assets/react.png')
    }
  }
}
</script>

<style scoped>
</style>
