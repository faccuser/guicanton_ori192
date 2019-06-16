# customQuestionForm

Deploy acontece em:
https://still-mountain-44468.herokuapp.com/

Banco Mongo usado, com armazenamento na amazon AWS:
https://mlab.com/

Projeto Gerador de Formulário foi criado tendo como base Node.JS no back-end e Vue.js no front-end. Sendo assim a primeira necessidade desse projeto é ter Node e npm(gerenciador de pacotes do javascript) instalados na maquinas que fará build da aplicação. 
Feito isso temos a necessidade de tambem instalar algumas dependencias que estão contidas no arquivo package.json. 
Necessario atenção, pois existem dois arquivos package.json, um para back-end e outro para front-end.

Dependencias necessarias BACK-END:
    - Axios(cliente HTTP baseado em Promises, responsavel por consumir e exibir API),
    - Express(framework que ofecere recursos fundamentais para facilitar o trabalho com Node),
    - mongoose(biblioteca que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação.),
    - vue(framework JavaScript para desenvolvimento do front-end reativo),
    - nodemon(não é exatamente necessario, mas esse módulo faz com que todas alterações feitas no código sejam automaticamente exibidas sem necessidade de buildar novamente o projeto)

Dependencias necessarias FRONT-END:
    - vue-cli(Command Line Interface para Vue, extremamente importante para facilitar importação de dependencias),
    - pwa(plugin que facilita a instalação do formato PWA na aplicação)
    - heroku(serviço em nuvem onde aplicação esta em produção)

Para instalar todas essas dependencias, basta no terminal executar "npm install -g (dependencia)", com exceção da PWA que necessita o comando "vue add @vue/pwa"

Dentro de nosso arquivo package.json ainda temos nossos scripts, esses scripts são configurações pré definidas para executar algum comando. No nosso caso temos apenas dois comandos em back-end, "start" e "dev". Um para startar o back-end e outro para o front-end. Então basicamente:
    - npm run dev - irá executar o back-end(pode ser executado na pasta raiz da aplicação).
    - npm run serve - irá executar o front-end(DEVE ser executado na pasta "/client").

Feito isso já temos nossa aplicação rodando de forma local.

Para deploy em heroku:
No terminal execute:
- npm run build(irá buildar a aplicação, se nenhum error ocorrer pode proseguir com deploy)
- heroku open(será aberta uma pagina web para login)

Feito isso basta validar se esta na branch heroku e executar:

Comite:
$ git commit -am "COMENTARIO"
$ git push

E finalmente execute:
$ npm run deploy
