const express = require('express');
//const BookData = require('./src/model/Bookdata');
const Userdata = require('./src/model/Userdata');
const Postdata = require('./src/model/Postdata');
//const AuthorData = require('./src/model/Authordata');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
const { isValidObjectId } = require('mongoose');
var app = new express();
app.use(cors());
app.use(express.json());
email="admin@gmail.com";
pwd="admin123";

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request');
      }
      let token = req.headers.authorization.split(' ')[1]
      if(token == 'null'){
        return res.status(401).send('Unauthorized request');
      }
      let payload = jwt.verify(token, 'secretKey')
      if(!payload){
        return res.status(401).send('Unauthorized request');
      }
      req.userId = payload.subject;
      next();
}

app.post('/newuser', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    console.log(req.body);
    var user = {
        username : req.body.user.username,
        email : req.body.user.email,
        pwd : req.body.user.pwd
    }
    var user = new UserData(user);
    user.save();
});

app.post('/login', function(req,res){
    let userData = req.body;
    UserData.findOne({email: userData.email})
    .then(function(user){
        if(user.pwd == userData.pwd){
            let payload = {subject:email+pwd};
            let token = jwt.sign(payload,'secretKey');
            res.status(200).send({token});
        }
        else{
            res.status(401).send('Invalid Password');
        }
    })
    .catch(function(){
        res.status(401).send('Invalid Email');
    }) 
});

app.get('/users', function(req,res){
    Userdata.find()
    .then(function(users){
        // console.log(res.body.users.name);
        res.send(users);
    })
    .catch(err => {
        console.log(err);
    });
});

app.get('/posts/:id', function(req, res){
    const postsid =req.params.id
    console.log("author id  is "+ postsid);
    Postdata.find({"AuthorID":postsid})
    .then((posts)=>{
          res.send(posts);
      });
  });

  app.get('/post/:id', function(req, res){
   
    // const postid =req.params.id
 const postid="60fb1bcfb650c7e41eb0c1bd"
    console.log("postid is "+ postid);
       Postdata.findOne({"_id": postid})
    .then((post)=>{
        console.log("post details are " + post);
          res.send(post);
      });
  });


app.get('/user/:id', function(req, res){
    const id =req.params.id
       Userdata.findOne({"userid":id})
    .then((user)=>{
          res.send(user);
      });
  });

  app.post('/insertuser', verifyToken, function(req,res){
    console.log(req.body);
    var newuser = {
        name : req.body.user.name,
        email : req.body.user.email,
        pwd : req.body.user.pwd,
        image : req.body.user.image,
        usertype : req.body.user.usertype
        
    }
    var user = new userdata(newuser);
    user.save();
});






app.listen(3000, function(){
    console.log('Listening to port 3000');
});