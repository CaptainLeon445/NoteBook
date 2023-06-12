const mongoose= require("mongoose")


const NoteSchema=mongoose.Schema({
    title:{
        type:String,
        require:[true, "Notebook must have title"],
        minLength:[5, "The title must have minimum five Characters"],
        maxLength:[30, "The title must have maximum thirty Characters"],
        trim: true,
        unique:[true, "The title is already existing in the database."]
    },
    content: {
        type: String,
        trim: true
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        // select:false
    },
    updatedAt: Date
},{
    versionKey: false // Exclude the '__v' field
  })


const Notes=mongoose.model("Notes", NoteSchema)
module.exports=Notes;