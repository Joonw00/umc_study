import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import storeService from "./storeService.js";

const addStore = async (req, res, next) => {
    res.send(response(status.SUCCESS, await storeService.addStore(req.body)));
}

const addMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await storeService.addMission(req.body)));
}
export default {
    addStore,
    addMission
};