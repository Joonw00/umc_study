import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import queries from "./user.sql.js";

// User 데이터 삽입
const addUser = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [confirm] = await pool.query(queries.confirmEmail, data.email);

        if(confirm[0].isExistEmail){
            conn.release();
            return -1;
        }

        const result = await pool.query(queries.insertUserSql, [data.email, data.name, data.gender, data.birth, data.addr, data.specAddr, data.phone]);

        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(queries.getUserID, userId);

        console.log(user);

        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 음식 선호 카테고리 매핑
const setPrefer = async (userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(queries.connectFoodCategory, [foodCategoryId, userId]);

        conn.release();
        
        return;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

// 사용자 선호 카테고리 반환
const getUserPreferToUserID = async (userID) => {
    try {
        const conn = await pool.getConnection();
        const prefer = await pool.query(queries.getPreferToUserID, userID);

        conn.release();

        return prefer;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

const addUserMission = async (data) => {
    try {
        const conn = await pool.getConnection();
        const [result] = await pool.query(queries.addUserMission, [1, data.status, data.userId, data.missionId]);
        conn.release();
        return result.insertId;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

const checkMissionInProgress = async (userId, missionId) => {
    try {
        const conn = await pool.getConnection();
        const [result] = await pool.query(queries.checkMissionInProgress, [userId, missionId]);
        conn.release();
        return result.length > 0;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export default {
    addUser,
    getUser,
    setPrefer,
    getUserPreferToUserID,
    addUserMission,
    checkMissionInProgress
};