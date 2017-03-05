const express = require('express');
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes');
const db = require('./models');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true })

app.use(volleyball);
app.use(bodyParser.urlencoded( { extended: false }))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(routes);

app.use((req,res,next)=>{
  const err = new Error('Not Found');
  err.status = 404;
  next (err);
})

app.use((err,req,res,next)=>{
  console.log("Error: ", err.message);
  const status = err.status || 500;
  res.status(status);
  res.render('error', { error: err, status: status });
})

const port = process.env.PORT || 3000;
db.sync()
.then( ()=> {
  app.listen(port, console.log(`server listening on port ${ port }`));
})

