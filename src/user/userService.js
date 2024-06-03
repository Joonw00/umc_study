import { BaseError } from "../../config/error.js";

import { status } from "../../config/response.status.js";
import { signinResponseDTO, addUserMissionResponseDTO  } from "./dtos/userResponseDto.js"
import userModels from "./userModels.js";

const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await userModels.addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await userModels.setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await userModels.getUser(joinUserData), await userModels.getUserPreferToUserID(joinUserData));
    }
}

const addUserMission = async (body) => {
    const isMissionInProgress = await userModels.checkMissionInProgress(body.userId, body.missionId);
    if (isMissionInProgress) {
        throw new BaseError(status.MISSION_ALREADY_IN_PROGRESS);
    }
    const userMissionData = await userModels.addUserMission({
        'status' : "진행중",
        'userId': body.userId,
        'missionId': body.missionId
    });

    if(userMissionData == -1){
        throw new BaseError(status.MISSION_ALREADY_EXIST);
    }else{
        return addUserMissionResponseDTO(userMissionData);
    }
}

export default {
    joinUser,
    addUserMission
};