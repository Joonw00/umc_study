const queries = {
    addReviewToStore: "INSERT INTO review (reviewID, rating, reviewText, reviewDate, userID, storeID) VALUES (?, ?, ?, ?, ?, ?)",
    getReviewByUserIDWithPagination: "SELECT * FROM review WHERE userID = ? LIMIT ? OFFSET ?",
    getTotalReviewCountByUserId: "SELECT COUNT(*) as count FROM review WHERE userID = ?"
};

export default queries;
