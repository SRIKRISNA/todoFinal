const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    password:String
})
const todoSchema = new mongoose.Schema({
    activity: String,
    status:String,
    action:String
});

const userModel = mongoose.model("user", userSchema);
const todoModel = mongoose.model("todo", todoSchema);

module.exports = {userModel, todoModel};

    // temp text
