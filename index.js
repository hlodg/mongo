const express = require('express');
const routes = require('./controllers/userRoutes');

const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)


app.listen(3001, ()=>{
    console.log("working")
})