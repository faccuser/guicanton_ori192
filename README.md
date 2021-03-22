# QUEATEST FORM TOOL


_@gcanton191_qeatest_evo_

Projeto gerador de formulário para uma ferramenta de Q&A foi criado tendo como base Node.js no back-end, Vue.js no front-end e repositório de dados NoSQL em MongoDB. 

Instalação do projeto:
<https://still-mountain-44468.herokuapp.com/>

com repositório de dados Mongo, com armazenamento na Amazon AWS:
<https://mlab.com/>


### Projeto

Este projeto tem a finalidade de permitir um uso rápido e sem burocracia para manipulação e consequentemente geração e compartilhamento de conteúdo. 

Basicamente o usuário pode criar ou responder questionários. 

1. Durante a criação o usuário insere um código de identificação do questionário, e uma credencial de autoria. que deverá ser utilizado para acessá-lo para responder. 

2. Para responder um usuário qualquer, basta incluir o código de identificação do questionário. 

3. Já para futuras alterações do formulário, por exemplo, para inclusão de novas questões, o usuário autor deve utilizar o mesmo código de identificação do form e mais a credencial utilizada durante sua criação (figura 1).

![]()
<img src="http://www.plantuml.com/plantuml/png/FOz13eCW44NtSufPreKUm1XZKcrtjKrCkYOuiKI41eQqnoz2AXluxyCBqtaMZiEcWHLhmhkGgrW8Ipm7ptR3Ho3FoXgyMBVXPAq6mBXEqf5WAb1ul0tFpC9xtbaEmlWFkNIX7pEIBv8hUcbTVdWT9e0wU78r0kmxbcMRV4SufFy3LbMasYxA55XZqoWZTPYfRI7wKjkFgQ0lavaZFsJn8rr4STuV" width="400">
> Figura 1. Diagrama Use Case

##### Requisitos Funcionais

- [x] Criar formulário com questões
- [x] Incluir questões em formulário existente
- [x] Responder questões de formulário específico
- [x] Submeter respostas
- [x] Apresentar pontuação por submissão
- [ ] Apresentar recordes e pontuação geral de formulário
- [ ] Histórico de participação geral por formulário 


O objeto de manipulação pelo sistema (figura 2) é uma entidade simplificada para manipulação rápida, previamente elaborada para o esquema agil do modelo. A simplicidade do objeto é proposital e segue uma proposta de desvincular de processos de controle de histórico e autitoria de participação

![]()
<img src="http://www.plantuml.com/plantuml/png/SoWkIImgoIhEp-DIKAZcub800gNKtCJC72Kh9IKT2B-qEBK8YLkGM5nSdb-K0X62Y9MaLfGWAIaiJIqkoSpFyyzBnI8QKfwFhBSWCpaxDIMag1IeLa592IXOo-MGcfS2SXK0" width="150">
> Figura 2. Objeto JSON, integração versão prototipo


A figura 3 apresenta a versão em andamento. Nesta branch o sistema melhora as opções de cotnrole de uma questão através de um mecanismo simples de bloqueio e flexibiliza o tipo de questão, permitindo multiplas respostas, ainda estáticas.

![]()
<img src="http://www.plantuml.com/plantuml/png/SoWkIImgoIhEp-DIKAZcub800gNKtCJC72Kh9IKT2B-qEBK8YLkGM5nSdb-K0X62Y2KcbsIM9PQaAbcL59McmaHBKYjAa3GMbgOMbsJcv_ddfM8H3IdFHpQn83CvEpKbfAWKg5OXsb37A1OeNilba9gN0d8k0000" width="250">
> Figura 3. Objeto JSON, versão de projeto completo


A estrutura de entidade e colaboração do sistema completo é apresentado na figura 4. nesta versão do modelo, é apresentado o contexto full de disposição das questões, controle de acesso aos formulários e histórico de participação.

![]()
<img src="http://www.plantuml.com/plantuml/png/JO-zIWKn48NhdQS8AHSiR2taWY9OgN2nZzb1efkTC9bS2_7TtSaFUvkTd-_ioPbJ5iTIuWhqyOLUp2jJGXxJ4t4S_Ll1B86sCJzlbo0uflUGWm10TAaJyml6O7HXXR-sRzvrNpBoNfBBUL1zgp9ndm-q83mwmGwRVQNP4-DUh-c8rWIb9jexvoLSdAYQalANxUZFFwG1Wl_6vSobUi7K8zfRQsxkZPrjYtLdFACwJVssGz0ldrf2E-jUiVu7atwhUExg4HLEk2qbhly0" width="600">
> Figura 4. Descrição do esquema por modelo entidade-relacionamento


##### Tecnologia Envolvida

- front-end Web com Vue.js;
- PWA para execução em ambiente móvel;
- back-end com Node.js;
- modelo de dados não relacional (nosql);
- gerenciador de banco de dados MongoDB
- Heroku para ambiente de execução back-end (PaaS)
- AWS para embiente de execução do MongoDB (DBaaS)

### Resultados

A figura 5 mostra a tela principal do protótipo em execução. De forma dinâmica o usuário, em uma mesma tela, pode acessar diretamente o sistema como visitante ou como um proper de formulário. 

![]()
<img src="https://user-images.githubusercontent.com/2241850/112007221-40027e00-8b03-11eb-9aa1-4095037f9398.png" width="250">
> Figura 5. Tela principal

Dinamicamente e baseado nas estruturas de execução PWA e apresentação SPA, a partir de um mesmo ponto o usuário pode ser um proper ou invite, baseado unicamente pela introdução de uma autenticação ou não. isto é possível pelo fato do sistema não atrelar a execução do protótipo em cima de um componente de validação de acesso.  

A figura 6 exemplifica os três estados básicos do sistema: autenticando, editando (proper) e visitando (invite), tudo, conforme apresentado através das imagens através de ações simples e rápida, como mínimas transições de sessão, facilitando o processo de troca de mensagem entre o front e back-end, e ainda assim melhorando a satisfação do usuário do sistema com uma interface simples, leve e de rápido manuseio.

![]()
<img src="https://user-images.githubusercontent.com/2241850/112007235-442e9b80-8b03-11eb-8afe-5265dc8fefa4.png" width="650">
> Figura 6. Ciclo de estados


Igualmente a imagem 5, esta figura (7) apresenta a mesma visão porém utilizando o acesso web. Da emsma forma, nela o usuário decide através da inclusão ou não de suas credenciais qual operação deseja executar no sistema.

![]()
<img src="https://user-images.githubusercontent.com/2241850/112019229-fd926e80-8b0d-11eb-8e1b-67bff36b7306.png" width="550">
> Figura 7. Ciclo de estados

A figura 8 apresenta o esquema de deploy para o protótipo atual. Basicamente o componente de back-end roda no Heroku. O sistema de gerenciamento de dados é baseado em servições de paas da AWS para MongoDB, o Atlas DB.

Através de dispositivos de acesso que rodam http através de browser de internet o usuário pode acessar o sistema. A característica responsivo do projeto com os componetens de interface Vue são responsáves pelas renderizações para mobile.

![]()
<img src="http://www.plantuml.com/plantuml/png/ROy_Jy0W4CNt-nHlT25nD4wjEkYWInEThmN_AEMQ0z8Oq-ykeQ6fYJSyo8_tuD75n9hox6doaYsg4i1J4aMEcVL3YD2sC6Rtu1hlAIrK1XWb1ylwZL5bZKxFQ7KZBmkXi5VbsU6sndy8QEJUgNpbYke4iGxFLqzb-OmLRbLFaVvbQFuMw9Fd-2ZXJUvkJY4KtMhBlGcCEUvkdq0h_l_XGSp5fVdpJl4yC0_KkM3px7y1" width="350">
> Figura 8. Esquema de deploy



### Instalação

A primeira necessidade desse projeto é ter **node** e **npm** (gerenciador de pacotes do javascript) instalados na maquinas que fará build da aplicação. 

Feito isso temos a necessidade de tambem instalar algumas dependencias que estão contidas no arquivo `package.json`. 

Necessário atenção, pois existem dois arquivos package.json, um para back-end e outro para front-end.

##### Dependencias necessarias BACK-END:
- **Axios** - cliente HTTP baseado em Promises, responsavel por consumir e exibir API),

- **Express** - framework que ofecere recursos fundamentais para facilitar o trabalho com Node,
- **mongoose** - biblioteca que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação.,
- **vue** - framework JavaScript para desenvolvimento do front-end reativo,
- **nodemon** - não é exatamente necessario, mas esse módulo faz com que todas alterações feitas no código sejam automaticamente exibidas sem necessidade de buildar novamente o projeto

##### Dependencias necessarias FRONT-END:
- **vue-cli** - Command Line Interface para Vue, extremamente importante para facilitar importação de dependencias,
- **pwa** - plugin que facilita a instalação do formato PWA na aplicação
- **heroku** - serviço em nuvem onde aplicação esta em produção

Para instalar todas essas dependencias, basta no terminal executar:
```
npm install -g (dependencia)
```

**importante!** 

com exceção da PWA que necessita do comando:

```
$ vue add @vue/pwa
```

Dentro de nosso arquivo `package.json` ainda temos nossos scripts. Esses scripts são configurações pré definidas para executar algum comando. No nosso caso temos apenas dois comandos em back-end, **start** e **dev**. Um para startar o back-end e outro para o front-end. 

Então basicamente:

```
$ npm run dev
```
> irá executar o back-end (pode ser executado na pasta raiz da aplicação).


```
$ npm run serve
```
> já isso irá executar o front-end (DEVE ser executado na pasta "/client").

Feito isso já temos nossa aplicação rodando de forma local.

##### Para deploy no Heroku:
No terminal execute:
```
$ npm run build 
```
> isso irá buildar a aplicação, se nenhum error ocorrer pode proseguir com deploy

```
$ heroku open 
```

> assim será aberta uma pagina web para login

Feito isso basta validar se esta na branch heroku e executar:

Comite:
```
$ git commit -am "COMENTARIO"
$ git push
```

E finalmente execute:
```
$ npm run deploy
```

<sup>_MIT License Copyright 2020 &reg; _@guicanton/customQuestionForm, _@guicanton/formPWA and @facuser/guicanton_ori192 and (CC) Creative Commons CC BY-NC___<sup>


