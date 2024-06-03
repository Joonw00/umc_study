export const addReviewResponseDTO = (reviewId, body) => {
    return {
        "reviewId": reviewId,
        "rating": body.rating,
        "reviewText": body.reviewText,
        "reviewDate": new Date(),
        "userID": body.userID,
        "storeID": body.storeID
    };
}


export const reviewPaginationDTO = (reviews, total, page, pageSize) => {
    return {
        reviews: reviews,
        total: total,
        page: page,
        pageSize: pageSize
    };
};
