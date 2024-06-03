import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import userService from "./userService.js";

const userSignin = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userService.joinUser(req.body)));
}

const addUserMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await userService.addUserMission(req.body)));
}
export default {
    userSignin,
    addUserMission
};