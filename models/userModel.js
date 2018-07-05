const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// 没有mongoose.Promise = global.Promise  这个意思是mongoose自带的promise过期了
// 然后需要v8引擎的promise
mongoose.connect('mongodb://localhost:27017/userdb');
// 先创建一个schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone:String
})
// 通过shcema创建一个model
const model = mongoose.model('user', userSchema);

module.exports = model;