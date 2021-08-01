const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.snw4u.mongodb.net/ICTBlogWebsite?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    PostTitle : String,
    CreatedTime : Date,
    Description : String,
    Tag : String,
    Status : String,
    Image : String ,
    Author : String,
    AuthorID : String
});

var Postdata = mongoose.model('PostsMain', PostSchema, 'PostsMains');

module.exports =  Postdata;