import express from 'express';
import asyncHandler from 'express-async-handler';
import userController from "../user/userController.js";

export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userController.userSignin));

userRouter.post('/addUserMission', asyncHandler(userController.addUserMission));

userRouter.post('/completeUserMission', asyncHandler(userController.completeUserMission));

userRouter.get('/mission', asyncHandler(userController.getUserMissionsByUserId));
