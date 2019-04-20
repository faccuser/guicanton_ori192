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
    PostComponent
  }

  
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
    background: #ffeeee !important;
}
</style>
