import User from "../Models/userModel.js";

// Auth user
export const authUser = (async(req, res) => {
  const {email, password} = req.body

  const user = await User.findOne({email})
  if(user && (await user.matchPassword(password))) {
    res.json({
      _id: user._is,
      email: user.email,
      token: null
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
  res.send(user)
})
