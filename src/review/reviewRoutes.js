import express from 'express';
import asyncHandler from 'express-async-handler';

import reviewController from "./reviewController.js";

export const reviewRouter = express.Router();

reviewRouter.post('/add', asyncHandler(reviewController.addReview));

reviewRouter.get('/', asyncHandler(reviewController.getReviewByUserId));