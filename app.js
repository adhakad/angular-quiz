const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  
//   next();
// });


app.use(express.static(path.join(__dirname, './dist/angular-slider')));
app.use('/',express.static(path.join(__dirname,'./dist/angular-slider')));

app.get('/*',(req,res) => {
  res.sendFile(path.join(__dirname ,'./dist/angular-slider/index.html'));
})


app.listen(port, () => {
  console.log(`server runing port on ${port}`);
})