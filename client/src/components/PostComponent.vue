<template>
  <div class="container main-base">
    <h2>Bem vindo {{user}}!</h2><br>
    <div>
      <label for="create-post">Usuario: </label>
      <input type="text" id="create-post" v-model="user" placeholder="User">
      <label for="create-post">  Senha: </label>
      <input type="password" id="create-post" v-model="password" placeholder="Password">
    </div><br>
    <h2 class="welcome">Formulario sobre <span style="color: #35495e;">{{email}}</span></h2>
    <div>
      <label for="create-post">Assunto: </label>
      <input type="text" id="create-post" v-model="email" placeholder="Busque seu tema">
    </div><br>

    
    <div class="create-post form-active">
      <h2>Crie seu formulário!</h2>

      <label for="create-post">Nome da questão: </label>
      <input type="text" v-on:click="startBlock()" id="create-post" v-model="text" placeholder="Create a Question">
      <div>
        <label for="create-post">Primeira opção: </label>
        <input type="text" v-on:click="startBlock()" id="create-post" v-model="questionOne" placeholder="First Option">
        <input type="radio" name="input-value" value="1" v-model="pickedTrue">
        
        <br>
        <label for="create-post">Segunda opção: </label>
        <input type="text" v-on:click="startBlock()" id="create-post" v-model="questionTwo" placeholder="Second Option">
        <input type="radio" name="input-value" value="2" v-model="pickedTrue">
        
      </div>
      <br><span id="create-post">Resposta verdadeira: {{ pickedTrue }}</span>
      <br>
      <button v-on:click="createPost" id="btn-creator">Criar Questão!</button>
    </div>

    <h1>Questions</h1>
    <p class="error" v-if="error"> {{ error }} </p>
    <div class="posts-container">
      <div class="post main-container-question"
        v-for="(post, index) in even(posts, email)"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
        <p class="text">{{ post.text }}</p>
        <div>
          <input type="radio" name="choise-area" class="text" value="1">{{ post.questionOne }}<br>
          <input type="radio" name="choise-area" class="text" value="2">{{ post.questionTwo }}
        </div>

        <p class="text true-question">Resposta verdadeira: <span>{{ post.pickedTrue }}</span></p>
        <p style="font-size: 10px;">created by: {{post.user}}</p>
        <br><button class="btn-submit" >Submit!</button>
        <button class="btn-delete" v-if="post.password == password || post.password == null" v-on:click="deletePost(post._id)">Delete!</button>
        <button v-else style="background-color: #b7a5aa;">Delete Lock</button>
  
      </div>
    </div>

    <button class="btn-submit" >Veja sua pontuação</button>
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
      password: ''
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
    even: function (posts, email) {
      return posts.filter(function (post) {
        return post.email === email
      })
    },
    async createPost(){
      await PostService.insertPost(this.text, this.questionOne, this.questionTwo, this.pickedTrue, this.email, this.user, this.password);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
};
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
    background-color: #f3f2f5;
    width: 280px;
    border-radius: 5px;
    margin: 15px auto;
    font-size: 19px;
    font-family: sans-serif;
    font-weight: 700;
    color: black;
    -webkit-box-shadow: 0px 2px 8px 2px rgb(208, 208, 208);
    box-shadow: 0px 2px 8px 2px rgb(179, 190, 195);
    padding: 10px;
}
button {
    padding: 15px 110px;
    background-color: #ff2b5d;
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
    padding: 5px 10px;
    margin-bottom: 5px;
    border-radius: 15px;
    color: #22476f;
    border-style: double;
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
    background-color: #f3f2f5;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 8px 2px rgb(179, 190, 195);
}
.container.main-base {
    max-width: 1100px;
    border-radius: 5px;
    padding: 20px;
    margin: 15px auto;
    -webkit-box-shadow: 1px 1px 10px 0px rgba(255, 51, 92, 0.41);
    box-shadow: 5px 3px 44px 0px rgba(152, 152, 152, 0.69);
    background-color: white;
}
</style>
