const express = require('express');
const app = express();
const http = require('http').createServer(app);
const productRoute = require('./routes/Product');
const accountRoute = require('./routes/Account');

// we need to parse body when we get data from client side
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-width, Content-Type, Accept");
    next(); // to keep program going 

});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/product', productRoute);
app.use('/account', accountRoute);

const port = 3001;
http.listen(3001, () => console.log(`server ${port} üzerinde ayakta`));