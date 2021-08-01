const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.snw4u.mongodb.net/ICTBlogWebsite?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userid : String,
    firstname : String,
    lastname : String,
    email : String,
    password : String,
    image : String,
    usertype : String
});

var Userdata = mongoose.model('Userprofile', UserSchema, 'Userprofiles');

module.exports =  Userdata;