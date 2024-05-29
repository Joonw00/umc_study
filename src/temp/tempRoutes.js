import express from 'express';
import { tempTest } from "./tempController.js";

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);