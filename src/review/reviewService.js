import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import reviewModels from "./reviewModels.js";
import storeModels from "../store/storeModels.js";

const addReview = async (body) => {
    const storeExists = await storeModels.checkIfStoreExists(body.storeID);
    if (!storeExists) {
        throw new BaseError(status.STORE_NOT_FOUND);
    }
    const reviewId = await reviewModels.addReviewToStore({
        'rating': body.rating,
        'reviewText': body.reviewText,
        'reviewDate': new Date(),
        'userID': body.userID,
        'storeID': body.storeID
    });
    if (reviewId == -1) {
        throw new BaseError(status.REVIEW_CREATION_FAILED);
    } else {
        return reviewId;
    }
}

export default {
    addReview
};
