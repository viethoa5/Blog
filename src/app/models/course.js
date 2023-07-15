const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug)

const Course = new Scheme({
    name : String,
    description : String,
    image : String,
    slug : {type: String,slug:'name',unique: true,updateOne: true},
    videoId : String,
    level : String,
    created_at : {type : Date, default : Date.now},
    update_at :  {type : Date, default : Date.now},
});

module.exports = mongoose.model('Course', Course)