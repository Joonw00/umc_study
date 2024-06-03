import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import reviewService from "./reviewService.js";

const addReview = async (req, res, next) => {
    res.send(response(status.SUCCESS, await reviewService.addReview(req.body)));
}

export default {
    addReview
};
