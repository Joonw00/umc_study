import { BaseError } from "../../config/error.js";

import { status } from "../../config/response.status.js";
import storeModels from "./storeModels.js";



const addStore = async (body) => {
    const storeId = await storeModels.addStoreToRegion({
        'storeName': body.storeName,
        'storeAddr': body.storeAddr,
        'storeDescription': body.storeDescription,
        'storeRegionId': body.storeRegionId
    });
    if(storeId == -1){
        throw new BaseError(status.STORE_ALREADY_EXIST);
    }else{
        return storeId;
    }
}

const addMission = async (body) => {
    const storeId = await storeModels.addMissionToStore({
        'missionTitle': body.missionTitle,
        'missionDescription': body.missionDescription,
        'missionPoints': body.missionPoints,
        'storeID': body.storeID
    });
    if(storeId == -1){
        throw new BaseError(status.STORE_ALREADY_EXIST);
    }else{
        return storeId;
    }
}

export default {
    addStore,
    addMission
};
