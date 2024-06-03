import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

import queries from "./review.sql.js";

const addReviewToStore = async (data) => {
    try {
        const conn = await pool.getConnection();
        console.log(queries.addReviewToStore);
        const [result] = await pool.query(queries.addReviewToStore, [3, data.rating, data.reviewText, data.reviewDate, data.userID, data.storeID]);
        conn.release();
        return result.insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
const getReviewByUserId = async (userId, offset, limit) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(queries.getReviewByUserIDWithPagination, [userId, limit, offset]);
        conn.release();
        return review;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
const getTotalReviewCountByUserId = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [[{ count }]] = await pool.query(queries.getTotalReviewCountByUserId, [userId]);
        conn.release();
        return count;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export default {
    addReviewToStore,
    getTotalReviewCountByUserId,
    getReviewByUserId
};