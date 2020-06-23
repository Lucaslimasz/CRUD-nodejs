const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// inicinado o app
const app = express();
// permite que envie dados em json
app.use(express.json());

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true,
         useUnifiedTopology: true
        }
);

requireDir('./src/models');


// rotas
app.use('/api', require('./src/routes'));


app.listen(3000)