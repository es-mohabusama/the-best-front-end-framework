<template>
  <div>
    <h3>Enter a string to be reversed!</h3>
    <input type="text" id="inputName" v-model="initialString" @keyup.enter="reverse">
    <button type="button" class="btn btn-default" @click="reverse">reverse</button>
    <p style=" white-space: pre;"><mark style="background-color: lightgray;">{{ reversedString }}</mark></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialString: "",
      reversedString: ""
    }
  },
  methods:{
    /*
    reverse (string):
    the main functionality is reverseing the word order of a sentence 
    without changing the number of spaces before, after or between the words
    =========================================================================
    the main algorithm is:
    ----------------------
    1- reverse the entire string
    2- loop over the resulting string if a char is not a space
    loop over the letters until the next space "end of word" 
    or end of entore string also a word ender. 
    3-revers the found word.
    4-construct a new result string containing the final string.
    
    Time complexity O(2n) ~= O(n) with n preprocessing.
    Memory usage O(2n) excluding the initial string .
    */
    reverse: function() {
      var reversed = ""
      var result = ""
      for(var i = this.initialString.length ; i >= 0 ; i--) {
        reversed += this.initialString.charAt(i)
      }
      for(var i = 0 ; i < reversed.length ; i++) {
        if(reversed.charAt(i) != " ") {
          var word = ""
          while(reversed.charAt(i) != " " && i < reversed.length) {
            word += reversed.charAt(i)
            i++
          }
          i--
          result+= word.split('').reverse().join('')
        }
        else {
          result+= reversed.charAt(i)
        }
      }
      this.reversedString = result
    }
  }
}
</script>

<style scoped>

</style>
