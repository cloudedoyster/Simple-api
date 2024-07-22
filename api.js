const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const express = require('express');
const bcrypt  =require('bcrypt');

const app= express();
const PORT= 8080;

app.use(express.json());
app.listen(
    PORT,
    () =>console.log('Its running on http:/localhost:${PORT}')
);
app.use(bodyParser.json ());

app.post('/register', (req, res)=>{
const {firstName, lastName, Email, Password} = req.body;
if(!firstName|| !lastName || !Email || !Password){
    return res.status(400).send('All fields are required');
};
const EmailExists= user.find(user=> user.Email===Email)
if(EmailExists){
    return res.status(400).send('This email is already has an account');
};
const newUser={firstName, lastName, Email, Password};
user.push(newUser);
res.status(200).send('You have succesfully registered');

const hashedPassword = await bcrypt.hash(password, 10); 

  const newUser = new User({
    Email,
    Password: hashedPassword,
    firstName,
    lastName,})
});

app.post('/login', (req,res)=>{
const {Email, Password} =req.body;
if( !Email || !Password){
    return res.status(400).send('All fields are required');}
const user= user.findOne({email});
if(!user){
    return res.status(400).send('enter a valid Email address')};
const isPasswordValid= await bcrypt.compare(Password, userPassword);
if(!isPasswordValid){
    return res.status(400).send('Password incorrect');
}   
res.send('Login successful');
});