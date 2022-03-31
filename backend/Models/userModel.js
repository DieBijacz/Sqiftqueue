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

const User = mongoose.model('User', userSchema)
export default User
