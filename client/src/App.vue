<template>
  <div id="app">
    <img alt="Brain Form Logo" src="https://eggbeater.ca/wp-content/uploads/2018/05/logo-brain-picker.svg" height="180px" width="180px">
    
    <PostComponent />

  </div>
</template>


<script>
import PostComponent from './components/PostComponent.vue'


export default {
  name: 'app',
  components: {
    PostComponent,
    
  },
  methods: {
    calculateFinalScore: function() {
      var numbersOfCards = document.getElementsByClassName("main-container-question").length
      var finalResult = 0

      for (var i = numbersOfCards - 1; i >= 0; i--) {
        var numberOfOptions = document.getElementsByClassName("main-container-question")[i].getElementsByClassName("text-value").length
        
        for (var j = 0; j <= numberOfOptions - 1; j++) {
          var checkedValue = document.getElementsByClassName("main-container-question")[i].getElementsByClassName("text-value")[j].checked
          if (checkedValue){
            var questionChecked = j + 1;
          }
        }

        var trueResponse = document.getElementsByClassName("true-response")[i].innerText

        if(trueResponse == questionChecked){
          finalResult = finalResult + 1;
        }
      }
      finalResult = finalResult/numbersOfCards * 100;

      return alert("Voce acertou " + finalResult + "% do teste!")
    }

  },
    
  
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
body {
    background: #464646 !important;
}
</style>
