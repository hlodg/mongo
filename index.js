const express = require('express');
const router = require('./routes/index');

const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)


app.listen(3001, ()=>{
    console.log("working")
})