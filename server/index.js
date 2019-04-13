const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

//Lançando em Produção
if(process.env.NODE_ENV === 'production'){

    //apontando para index page padrão
    app.use(express.static(__dirname + '/public/'));

    //Lidando com single page
    app.get(/.*/, (req, res) => res.sendFile(__dirname = '/public/index.html')); 
}

const port = process.env.PORT || 6000;

app.listen(port, () => console.log('Server started on port http://localhost:6000/api/posts'));