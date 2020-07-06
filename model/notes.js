var mongoose = require('mongoose'), Schema = mongoose.Schema;

// Events schema
var notesSchema = new mongoose.Schema(
    {
       // _id:  mongoose.Schema.Types.ObjectId,
        title:{
            type:String,
            unique:true,
            required: [true, 'Title is Required.'],
        },
        description: String,
        createdBy:{type: Schema.Types.ObjectId, ref: 'users' },
        
        createdDate:{type:Date,default:Date.now},
        modifiedBy:{type: Schema.Types.ObjectId, ref: 'users' },
        modifieDate:{
            type:Date,
        
      
        }
    })
var userSchema= new Schema({
    username:{  type:String,
        unique:true,
        required: [true, 'Title is Required.'],},
    password:String,
    salt:String,
    email:String
})
var notes = mongoose.model('notes', notesSchema)
var user=mongoose.model('users',userSchema)
module.exports = {
    notes: notes,
    user:user
}
