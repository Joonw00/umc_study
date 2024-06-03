import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import userModels from "./userModels.js";
import { missionPaginationDTO } from './dtos/userResponseDto.js';

const getUserMissionsByUserId = async (userID, page, pageSize) => {
    const offset = (page - 1) * pageSize;
    const [missionData, totalCount] = await Promise.all([
        userModels.getUserMissionsByUserId(userID, offset, pageSize),
        userModels.getTotalUserMissionCountByUserId(userID)
    ]);
    if (missionData.length === 0) {
        throw new BaseError(status.MISSION_NOT_FOUND);
    } else {
        return missionPaginationDTO(missionData, totalCount, page, pageSize);
    }
}

export default {
    getUserMissionsByUserId
};
