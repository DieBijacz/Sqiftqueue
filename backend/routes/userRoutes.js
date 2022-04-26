import express from "express";
import { addUserLocation, authUser, getUserById, getUsersClinics, registerUser, updateUserProfile } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile')
  .put(protect, updateUserProfile)
router.route('/:id').get(getUserById)
router.route('/location').post(protect, addUserLocation).get(protect, getUsersClinics)
export default router
