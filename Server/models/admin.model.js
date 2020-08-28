import mongoose from 'mongoose'

const AdminSchema = new mongoose.Schema({
    password: String,
})

const Admin = mongoose.model("admin", AdminSchema, "admin")

export default Admin