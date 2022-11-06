const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userModel, todoModel } = require('./schema');
const salt=10;

const app = express();
const port = 5000 | process.env.port;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, (err) => {
    if(!err) console.log("Server connected on " + port);
})

app.get("/", (req,res) => {
    res.status(200).send("connections established");
    // console.log("server started");
});

mongoose.connect("mongodb://localhost/todoFinal", (req,res) =>{
    console.log("db connection done");
})

//registeration api
app.post("/register", (req,res) => {
    bcryptjs.genSalt(salt, (err, hashSalt) => {
        bcryptjs.hash(req.body.password, hashSalt, (err, passwordHash) => {
            userModel.create({userName: req.body.userName, password:passwordHash}).then(() => {
                res.status(200).send("user registeration done");
            }).catch((err) => {
                res.status(400).send(err);
            })
        })
    })
})

//login
app.post("/login", (req,res)=>{
    userModel.find({userName:req.body.userName}).then((user)=>{
        if(user.length){
            bcryptjs.compare(req.body.password, user[0].password).then((match)=>{
                if(match){
                    const authToken = jwt.sign(req.body.userName, process.env.SECRET_KEY);
                    res.status(200).send(authToken);
                }else{
                    res.status(400).send("passowrd not matched");
                }
            })
        }else{
            res.status(400).send("user not registered");
        }
    })
});