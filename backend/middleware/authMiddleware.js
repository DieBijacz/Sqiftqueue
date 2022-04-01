import jsonwebtoken from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../Models/userModel.js";

const proctect = expressAsyncHandler(async(req, res, next) => {
  let token
 
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jsonwebtoken.verify(token, process.env.JWT_TOKEN)

      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, Token failed')
    }
  }

  if(!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
  next()
})

export default proctect
