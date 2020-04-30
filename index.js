const express = require('express');
const bodyParser = require("body-parser");

//importando rota user
const userRoute = require('./routes/userRoutes');

const app = express();
const port = 3000;

//app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.get('/', (req, res) => res.send('Olá mundo'));

app.listen(port, () => console.log('Api rodando na porta 3000'));