import { status } from '../../config/response.status.js';
import { getTempData } from '../temp/tempService.js';
import { response } from '../../config/response.js';

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};