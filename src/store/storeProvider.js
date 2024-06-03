import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import storeModels from "./storeModels.js";
import { missionPaginationDTO } from './dtos/storeResponseDto.js';

const getMissionsByStoreId = async (storeId, page, pageSize) => {
    const offset = (page - 1) * pageSize;
    const [missionData, totalCount] = await Promise.all([
        storeModels.getMissionsByStoreId(storeId, offset, pageSize),
        storeModels.getTotalMissionCountByStoreId(storeId)
    ]);
    if (missionData.length === 0) {
        throw new BaseError(status.MISSION_NOT_FOUND);
    } else {
        return missionPaginationDTO(missionData, totalCount, page, pageSize);
    }
}

export default {
    getMissionsByStoreId
};
