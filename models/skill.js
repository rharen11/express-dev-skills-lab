import mongoose from "mongoose"

const Schema = mongoose.Schema

const todoSchema = new Schema({
  text: String,
  done: Boolean,
})

const Skill = mongoose.model('Skill', todoSchema)

export {
  Skill
}