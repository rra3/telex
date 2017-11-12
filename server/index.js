'use strict';

const express = require('express');
const app = express();
const port = 4000;


app.set('view engine', 'pug');
app.set('views', './server/views');
app.use(express.static('client'));

var router = express.Router();


router.get('/', function (req, res) {
  res.render('index', {title: 'telex for message passing',
             message: 'hello world!'});
});

app.use('/', router);

app.listen(port, () => console.log('listening on port %s', port));
