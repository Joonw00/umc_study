import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import reviewModels from "./reviewModels.js";
import { reviewPaginationDTO } from './dtos/reviewResponseDto.js';


const getReviewByUserId = async (userId, page, pageSize) => {
    const offset = (page - 1) * pageSize;
    const [reviewData, totalCount] = await Promise.all([
        reviewModels.getReviewByUserId(userId, offset, pageSize),
        reviewModels.getTotalReviewCountByUserId(userId)
    ]);
    if (reviewData.length === 0) {
        throw new BaseError(status.REVIEW_NOT_FOUND);
    } else {
        return reviewPaginationDTO(reviewData, totalCount, page, pageSize);
    }
}



export default {
    getReviewByUserId
};