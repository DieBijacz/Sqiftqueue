import bcrypt from 'bcryptjs'
import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  latitude: { type: String, required: true },
  longitude: { type: String, required: true }
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
// to be called on specific user -> this.password = user.password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// PASSWORD ENCRYPTION MIDDLEWARE
// to encrypt user password when register
// to be executed before save -> .pre save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  // reasign hashed password
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)
export default User
