const mongoose = require('mongoose');

const ApitestingSchema = mongoose.Schema({
    id:Number,
    name: String,
    age: Number
}, {
        timestamps:true
    });
module.exports = mongoose.model('ApiTesting', ApitestingSchema);