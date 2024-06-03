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


export default {
    addStoreToRegion,
    addMissionToStore,
    checkIfStoreExists
};