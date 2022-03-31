import User from "../Models/userModel.js";

// Auth user
export const authUser = (async(req, res) => {
  const {email, password} = req.body
  res.send({email, password})
})
