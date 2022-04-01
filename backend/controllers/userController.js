import asyncHandler from 'express-async-handler'
import User from "../Models/userModel.js";
import generateToken from '../utils/generateToken.js'

// POST Auth user
export const authUser = asyncHandler(async(req, res) => {
  const {email, password} = req.body

  const user = await User.findOne({email})
  if(user && (await user.matchPassword(password))) {
    res.json({
      _id: user._is,
      email: user.email,
      locations: user.locations,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// GET user Profile
export const getUserProfile = asyncHandler(async (req, res) => {
  console.log('here')
  const user = await User.findById(req.user._id)
  if (user) {
    console.log(user)
    res.json({user})
  } else {
    res.status(401)
    throw new Error('User not found')
  }
})