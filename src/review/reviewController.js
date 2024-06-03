import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import reviewService from "./reviewService.js";
import reviewProvider from "./reviewProvider.js";

const addReview = async (req, res, next) => {
    res.send(response(status.SUCCESS, await reviewService.addReview(req.body)));
}
const getReviewByUserId = async (req, res, next) => {
    const { userId, page = 1, pageSize = 10 } = req.query;
    const reviewPagination = await reviewProvider.getReviewByUserId(userId, parseInt(page), parseInt(pageSize));
    res.send(response(status.SUCCESS, reviewPagination));
}

export default {
    addReview,
    getReviewByUserId
};
