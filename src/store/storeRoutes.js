import express from 'express';
import asyncHandler from 'express-async-handler';

import storeController from "./storeController.js";

export const storeRouter = express.Router();

storeRouter.post('/addToRegion', asyncHandler(storeController.addStore));

storeRouter.post('/addMission', asyncHandler(storeController.addMission));


storeRouter.get('/mission', asyncHandler(storeController.getMissionsByStoreId));
