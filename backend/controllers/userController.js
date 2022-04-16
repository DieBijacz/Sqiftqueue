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
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(401)
    throw new Error('User not found')
  }
})

// ====================== UPDATE USER PROFILE ======================
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { userId, location, name } = req.body

  const user = await User.findById(userId)
  if (user) {
    user.name = name || user.name
    user.email
    if (location)
      user.locations = [{ latitude: location[0], longitude: location[1] }, ...user.locations]

    const updatedUser = await user.save()
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})