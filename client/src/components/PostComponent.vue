<template>
  <div class="container main-base">
    <div class="main-image">
      <h1 class="app-custom-name">Form Generator</h1>
    </div>
    <h2>Bem vindo <span style="color: #ce3159;">{{user}}</span>!</h2><br>
    <div>
      <!-- <label for="create-post">Usuario: </label> -->
      <input type="text" id="create-post" v-model="user" placeholder="User">
      <br>
      <!-- <label for="create-post">  Senha: </label> -->
      <input type="password" id="create-post" v-model="password" placeholder="Password">
    </div><br>
    <h2 class="welcome">Formulário sobre <span style="color: #ce3159;">{{email.toLowerCase()}}</span></h2>
    <div>
      <!-- <label for="create-post">Assunto: </label> -->
      <input class="theme-search" type="text" id="create-post" v-model="email" placeholder="Busque seu código tema">
    </div><br>

    <div class="post-center">
      <div class="create-post form-active">
        <h2>Crie seu formulário!</h2>
        <p class="text-intro">Aqui você pode criar seu próprio formulário de maneira rápida e simples<br></p>
        

        <!-- <label for="create-post">Nome da questão: </label> -->
        <input type="text" v-on:click="startBlock()" id="create-post" v-model="text" placeholder="Nome da questão">
        <div style="margin-top:10px">
          <!-- <label for="create-post">Primeira opção: </label> -->
          <input type="text" v-on:click="startBlock()" id="create-post" v-model="questionOne" placeholder="Primeira opção">
          <input class ="input-question-true" type="radio" name="input-value" value="1" v-model="pickedTrue">
          
          <br>
          <!-- <label for="create-post">Segunda opção: </label> -->
          <input type="text" v-on:click="startBlock()" id="create-post" v-model="questionTwo" placeholder="Segunda opção">
          <input class ="input-question-true" type="radio" name="input-value" value="2" v-model="pickedTrue">
          
        </div>
        <br><span id="create-post" style="font-weight: 700; ">Resposta verdadeira será opção: {{ pickedTrue }}</span>
        <br>
        <button v-on:click="createPost" v-if="email.length > 0" id="btn-creator">Criar Questão!</button>
        <button v-else style="background-color: #b7a5aa;">Digite um tema para criar</button>
      </div>

      <h1>Questões</h1>
      <p class="error" v-if="error"> {{ error }} </p>
      <div class="posts-container">
        <div class="post main-container-question"
          v-for="(post, index) in even(posts, email.toLowerCase())"
          v-bind:item="post"
          v-bind:index="index"
          v-bind:key="post._id"
        >
          
          <p class="text">{{ post.text }}</p>
          <div>
            <div class="input-choise-area">
              {{ post.questionOne }}<input type="checkbox" name="choise-area" class="text-value" value="1">
              <span class="count-hits" v-if="post.password == password && post.user == user || post.password == null">5</span>
              <span class="count-hits" v-else style="display: none"></span>
            </div>
            <br>
            <div class="input-choise-area">
              {{ post.questionTwo }}<input type="checkbox" name="choise-area" class="text-value" value="2">
              <span class="count-hits" v-if="post.password == password && post.user == user || post.password == null " >2</span>
              <span class="count-hits" v-else style="display: none"></span>
            </div>
          </div>

          <p v-if="post.password == password && post.user == user">Resposta verdadeira: <span class="true-response">{{ post.pickedTrue }}</span></p>
          <p v-else style="display: none;"><span class="true-response">{{ post.pickedTrue }}</span></p>
          <br><br>
          <p style="font-size: 12px;">Criado por: {{post.user}} 
            <br><br>
            Em: {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
          </p>
          <br><button class="btn-submit" >Submit!</button>
          <button class="btn-delete" v-if="post.password == password && post.user == user || post.password == null " v-on:click="deletePost(post._id)">Deletar!</button>
          <button class="btn-delete-off" v-else style="background-color: #b7a5aa;">Deletar</button>

    
        </div>
       </div> 
    </div>

    <button class="btn-submit" v-if="email.length > 0" v-on:click="calculateFinalScore()" >Veja sua pontuação</button>
    <button v-else style="background-color: #b7a5aa;">Pontuação Bloqueada</button>

    <div id="result-card" style="display: none">
    </div>

  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data(){
    return {
      posts: [],
      error: '',
      text: '',
      email: '',
      questionOne: '',
      questionTwo: '',
      pickedTrue: '',
      user: '',
      password: '',
      finalResult: 0
    }
  },
  async created(){
    try{
        this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {

    startBlock: function() {
      if(document.querySelector(".main-container-question") != null && document.querySelector(".btn-delete") == null){
        document.getElementById("btn-creator").style.display = 'none'
      }
      if(document.querySelector(".btn-delete") != null || document.querySelector(".main-container-question") == null){
        document.getElementById("btn-creator").style.display = 'initial'
      }
    },
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

      document.getElementById("result-card").style.display = 'block'

      var element = document.getElementById('result-card');
      element.innerHTML = '<h1>Sua pontuação final é de '  + finalResult +  '%</h1>'

      return finalResult;
    },
    even: function (posts, email) {
      return posts.filter(function (post) {
        return post.email === email
      })
    },
    async createPost(){
      await PostService.insertPost(this.text, this.questionOne, this.questionTwo, this.pickedTrue, this.email.toLowerCase(), this.user, this.password);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    async updatePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
};

const montserrat = require('typeface-montserrat');

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label {
    font-size: 17px;
    font-weight: 700;
    color: #ff335c;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.post {
    width: 330px;
    margin: 15px auto;
    font-size: 19px;
    font-family: sans-serif;
    font-weight: 700;
    color: white;
    letter-spacing: 0.5px;
    padding: 10px;
    border-radius: 5px;
    background-color: #313131;
    border: solid 1.5px;
    border-color: #585858;
}
button {
    padding: 3% 16%;
    background-color: #ce3159;
    color: white;
    font-size: 18px;
    font-weight: 700;
    border-radius: 5px;
    border-style: none;
    margin-top: 15px;
    cursor: pointer;
    transition: 1.5s;
}
button:hover {
    opacity: 0.7;
}
input#create-post {
    margin-bottom: 10px;
    width: 55%;
    height: 35px;
    padding: 5px 25px;
    background-color: #313131;
    background-image: none;
    border: 1px solid #a5a5a5;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    transition: 1s;
}
button.btn-submit {
    padding: 15px 60px;
    background: black;
    border-radius: 5px;
}
button#btn-creator {
    max-width: 700px;
}
.create-post {
    max-width: 700px;
    margin: auto;
    background-color: #202225;
    padding: 10px;
    padding-bottom: 25px;
    border-radius: 5px;
    border: solid 1.5px;
    border-color: #585858;
}
.container.main-base {
    max-width: 725px;
    padding: 20px;
    margin: 15px auto;
    background-color: #202225;
    border-radius: 8px;
    border: solid 1.5px;
    border-color: transparent;
    transition: 1s;
    font-family: Montserrat;
}
input.input-question-true{
    position: absolute;
    margin-left: -38px;
    margin-top: 13px;
    height: 22px;
    width: 25px;
}
p.text-intro {
    font-size: 16px;
    padding-bottom: 65px;
    font-weight: 600;
    color: #ce3159;
    width: 85%;
    margin: auto;
}
.input-choise-area {
    padding: 12px 2px;
    background-color: #313131;
    background-image: none;
    border: 1px solid #a5a5a5;
    border-radius: 30px;
}
p.text {
    font-size: 24px;
    font-weight: 600;
    border-radius: 5px 5px 0px 0px;
    background: #ce3159;
    height: auto;
    padding: 25px 0px 25px 0px;
    color: white;
    width: 351px;
    position: relative;
    top: -36px;
    left: -11px;
}
button.btn-delete {
    padding: 5% 40%;
}
input.text-value[name="choise-area"] {
    position: absolute;
    margin-left: 10px;
    margin-top: 0px;
    height: 22px;
    width: 25px;
    -webkit-appearance: radio;
}
div#result-card {
    background-color: #313131;
    border: solid 1.5px;
    border-radius: 0px 0px 5px 5px;
    background: #ce3159;
    border-color: #ce3159;
    width: 745px;
    margin: auto -21px;
    margin-top: 20px;
    padding: 10px;
    -webkit-transition: 1.5s;
    transition: 1.5s;
    position: relative;
    top: 23px;
}
.main-image {
    background-color: #313131;
    border-radius: 5px 5px 0px 0px;
    background-image: linear-gradient(to bottom right, #ce3159, #f53a6a);
    border-color: transparent;
    width: 743px;
    height: 100px;
    margin: auto -20px;
    margin-top: 20px;
    padding: 10px;
    transition: 1.5s;
    position: relative;
    top: -42px;
}
h1.app-custom-name {
    font-family: unset;
    text-shadow: 3px 4px #202225;
    color: #ffffff;
    font-size: 62px;
    position: relative;
    bottom: 32px;
    letter-spacing: 4px;
    font-weight: 400;
    text-transform: uppercase;

}
input#create-post:focus {
    border-style: solid;
    border-color: #ce3159;
    outline: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}
span.count-hits {
    color: #ce3159;
    float: right;
    margin-right: 5px;
    font-size: 17px;
    margin-top: 0px;
    padding: 1px 5px 0px 6px;
    border: 1px solid #a5a5a5;
    border-radius: 23px;
}
/* Smartphone */
@media (max-width: 600px) {
  div#result-card{
    width: AUTO;
    font-size: 10px;
  }
  h1.app-custom-name{
    font-size: 41px;
  }
  .main-image{
    width: AUTO;
  }
  input#create-post {
    width: 80%;
  }
  .post{
    width: 294px;
    margin: auto;
  }
  p.text{
    width: 315px;
  }
}
</style>
