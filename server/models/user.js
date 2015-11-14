var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    username: {
        type:String,
        required: true,
        index: {
            uniquie:true
        }
    },
    password: {
        type:String,
        require: true
    },
    firstName: {
        type:String,
        require: true
    },
    lastName: {
        type:String
    },
    email: {
        type:String
    },
    persons: {
        type: [{}],
        default: null
    },
    gifts: {
        type: [{}],
        default: null
    }

});

UserSchema.pre("save", function(next){
    var user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash; //encrypts the password for this user
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model("User", UserSchema);







