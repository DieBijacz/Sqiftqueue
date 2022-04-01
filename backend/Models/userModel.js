import bcrypt from 'bcryptjs'
import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  latitude: {type: String, required: true},
  longitude: {type: String, required: true}
}, {
  timestamps: true
})

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  locations: [locationSchema]
}, {
  timestamps: true
})

// METHOD TO CHECK USER PASSWORD
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)
export default User
