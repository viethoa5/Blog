const path    = require('path')
const express = require('express');
const morgan = require('morgan');
var  {engine}  = require ('express-handlebars');
const newrouter = require('./router/newrouter')
const db = require('./config/db/indext')
const controllers = require('./app/controller/newcontroller')
const app = express();
const port = 3000;
const methodOverride = require('method-override');
// HTTP Logger
app.use(morgan("combined"))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded(``))
app.use(express.json());
app.use(methodOverride('_method'))
// Template engines
app.engine('hbs', engine({defaultLayout: 'main',extname: '.hbs',helpers:{
          summary: (a,b) => a + b,
}}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource//views'))

// Connect DB
db.connect();

newrouter(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})