const app= require("./middlewares")
const NoteRouter=require("./Routes/noteRoutes")

app.use("/v1/api/notes", NoteRouter)
module.exports=app;