const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3000;
const route = require('./routes');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded(
  {
    extended:true
  }
));
app.use(express.json());


// Cấu hình Handlebars
app.engine('hbs', engine({ extname: '.hbs' })); // Định dạng file .hbs
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views')); // Thư mục chứa file template
//Route init
route(app);
 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
