// MIDDLEWARE TO GET USER BASED ON TOKEN
import jsonwebtoken from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const proctect = expressAsyncHandler(async(req, res, next) => {
  let token
 
  // check for token
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // try to decode token
      token = req.headers.authorization.split(' ')[1]
      const decoded = jsonwebtoken.verify(token, process.env.JWT_TOKEN)

      // get user data based on decoded token
      // assign that data to req.user so it can be used in next middleware
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized, Token failed')
    }
  }
  if(!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export default proctect
