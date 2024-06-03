import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import userService from "./userService.js";
import userProvider from "./userProvider.js";

const userSignin = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userService.joinUser(req.body)));
}

const addUserMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userService.addUserMission(req.body)));
}

const getUserMissionsByUserId = async (req, res, next) => {
    const { userID, page = 1, pageSize = 10 } = req.query;
    const missionPagination = await userProvider.getUserMissionsByUserId(userID, parseInt(page), parseInt(pageSize));
    res.send(response(status.SUCCESS, missionPagination));
}

const completeUserMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userService.completeUserMission(req.body)));
}


export default {
    userSignin,
    addUserMission,
    completeUserMission,
    getUserMissionsByUserId
};