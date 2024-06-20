
const userModel = require("../models/user.model");
const bcrypt = require('bcrypt')
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const Secret = process.env.SECRET


 const ListOfStudent =(req, res)=>{
    res.send([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",  
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
        }
    ])
 }

 const register =(req, res)=>{
    // res.send('Register Page')
    let user =new userModel(req.body)
    user.save()
    .then((user) =>{
        console.log('user saved successfully');
        console.log(user);
        res.send({messsage: 'user saved successfully', status:true,})
    })
    .catch((err) =>{
        console.log(err);
        res.send('user failed to signUp')
    })
    
 }

  const signin = async(req, res)=>{
    const {email, password} = req.body
    let user;
    try {
        user = await userModel.findOne({ email: email })
    }catch (error){
        return new Error
    }
    if (!user) {
        res.status(400).json({
            Message: 'user not found, please sign up!!!'
        })
        console.log('user not found, please sign up!!!');
    }

    const correctPassword = bcrypt.compareSync(password, user.password)

    if (!correctPassword) {
        res.status(401).json({
            Message: 'Wrong login details'
        })
        console.log('Wrong login details');
    }
    else {
        const token = jwt.sign({user: user.email}, Secret, { expiresIn: '1h'})
        res.status(200).json({
            Message: 'user logged in successfully',
            status: true, token: token
        })
        console.log('user logged in successfully');
    }
 }

 const dashboard = (req, res) => {
    userModel.find().then((data)=>{
        console.log(data);
        res.send({data: data});
    }).catch((err) => {
        console.log(err);
    });
 }

 const sendMailer=(req, res)=>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    console.log('mail sent');
    let mailOptions = {
        from: process.env.EMAIL,
        to: "teeboypos@gmail.com, teeboyventure@gmail.com, sodiqybnl@yahoo.com" , // list of receivers
        subject: "Hello Teeboy", // Subject line
        text: "Hello world?", // plain text body
        // html: "<b>Hello world?</b>", // html body
      }
    
      transporter.sendMail(mailOptions).then((info)=>{
        console.log(info);
        res.send({message: 'mail sent successfully', status: true});
      }) 
      .catch((err)=>{
        console.log(err);
        res.status(500).json({message: 'failed to send mail', status: false});
      }) 
 }
  

 const verified = (req, res) => {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, Secret, (err, result) => {
        if (err){
            console.log(err);
            res.send({message: "authentication failed",  status:false, user: err});
        }else{
            res.send({message: "authenticated user",  status:true, user: result});
            console.log(result);
        }
    })
 }

 module.exports = {ListOfStudent, register, signin, dashboard, verified, sendMailer}