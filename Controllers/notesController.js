const Notes=require("../Models/Note");

exports.createNote=async (req, res)=>{
    try{
        const {title, description}=req.body;
        const newNote=await Notes.create({
            title,
            description
        })
        res.status(200).json({
            message: "success",
            data: newNote
        })
    }catch (err){
        res.status(404).json({
            message: "fail",
            err
        })
    }
}

exports.getNotes=async (req, res)=>{
    try{
        const filter=req.query
        const sortby=req.query.sort
        let notes=await Notes.find()
        if (filter){
            notes=await Notes.find(filter)
        }
        
        res.status(200).json({
            message: "success",
            data: notes
        })
    }catch (err){
        res.status(404).json({
            message: "fail",
            err
        })
    }
}

exports.getNote=async (req, res)=>{
    try{
        const id=req.params.id
        let note=await Notes.findById(id)
        res.status(200).json({
            message: "success",
            data: note
        })
    }catch (err){
        res.status(404).json({
            message: "fail",
            err
        })
    }
}

exports.updateNote=async (req, res)=>{
    try{
        const content=req.body;
        content.updatedAt=Date.now()
        const id=req.params.id
        const note=await Notes.findByIdAndUpdate(id, content, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            message: "success",
            data: note
        })
    }catch (err){
        res.status(404).json({
            message: "fail",
            err
        })
    }
}

exports.deleteNote=async (req, res)=>{
    try{
        const notes=await Notes.findByIdAndDelete(id=req.params.id)
        res.status(200).json({
            message: "success",
            data: null
        })
    }catch (err){
        res.status(404).json({
            message: "fail",
            err
        })
    }
}