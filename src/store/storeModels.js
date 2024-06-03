import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";

import queries from "./store.sql.js";

const addStoreToRegion = async (data) => {
    try {
        const conn = await pool.getConnection();
        const [result] = await pool.query(queries.addStoreToRegion, [2, data.storeName, data.storeAddr, data.storeDescription, data.storeRegionId]);
        conn.release();
        return result.insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

const addMissionToStore = async (data) => {
    try {
        const conn = await pool.getConnection();
        const [result] = await pool.query(queries.addMissionToStore, [1, data.missionTitle, data.missionDescription, data.missionPoints, data.storeID]);
        conn.release();
        return result.insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

const checkIfStoreExists = async (storeID) => {
    try {
        const conn = await pool.getConnection();
        const [result] = await pool.query('SELECT * FROM store WHERE storeID = ?', [storeID]);
        conn.release();
        return result.length > 0;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}


const getMissions = async () => {
    try {
        const conn = await pool.getConnection();
        const [result] = await pool.query(queries.getMissions);
        conn.release();
        return result;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}


const getMissionsByStoreId = async (storeId, offset, limit) => {
    try {
        const conn = await pool.getConnection();
        const [missions] = await pool.query(queries.getMissionsByStoreIDWithPagination, [storeId, limit, offset]);
        conn.release();
        return missions;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

const getTotalMissionCountByStoreId = async (storeId) => {
    try {
        const conn = await pool.getConnection();
        const [[{ count }]] = await pool.query(queries.getTotalMissionCountByStoreID, [storeId]);
        conn.release();
        return count;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export default {
    addStoreToRegion,
    addMissionToStore,
    checkIfStoreExists,
    getMissions,
    getMissionsByStoreId,
    getTotalMissionCountByStoreId
};