import asyncHandler from 'express-async-handler'
import User from "../Models/userModel.js";
import generateToken from '../utils/generateToken.js'
import colors from 'colors'

// POST Auth user
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      locations: user.locations,
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// POST register user
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  // check if that email is not in db
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400)
    throw new Error('Email already registered')
  }

  // create new user -> save new user / password will be encrypted in middleware in userModel.js
  const user = await User.create({ name, email, password, })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id), // generate token for new user
    })
  } else {
    res.status(401)
    throw new Error('Invalid user data')
  }
})

// GET user Profile
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      email: user.email,
      locations: user.locations,
    })
  } else {
    res.status(401)
    throw new Error('User not found')
  }
})

// ====================== UPDATE USER PROFILE ======================
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { userId, location } = req.body
  console.log(userId, location)

  const user = await User.findById(req.body.userId)
  console.log(user)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (location)
      user.locations = [...user.locations, { latitude: location[0], longitude: location[1] }] || user.locations
    console.log(`${user.locations}`.red)

    const updatedUser = await user.save()
    console.log(updatedUser)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})