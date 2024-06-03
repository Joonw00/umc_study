const queries = {
    addReviewToStore: "INSERT INTO review (reviewID, rating, reviewText, reviewDate, userID, storeID) VALUES (?, ?, ?, ?, ?, ?)"
};

export default queries;
