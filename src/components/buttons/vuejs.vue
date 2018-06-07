<template>
  <div>
    <button type="button" class="btn btn-default" @click="choseVue" :disabled="isClicked">Vue above all</button>
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
        if(newVal != 'vue') {
          this.isClicked = false
        } else {
          this.isClicked = true
        }
    }
  },
  methods:{
    choseVue: function() {
        this.isClicked = true
        this.$emit('onVueClicked', 'src/assets/vuejs.png')
    }
  }
}
</script>

<style scoped>
</style>
