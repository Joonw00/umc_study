import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import storeService from "./storeService.js";
import storeProvider from "./storeProvider.js";

const addStore = async (req, res, next) => {
    res.send(response(status.SUCCESS, await storeService.addStore(req.body)));
}

const addMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await storeService.addMission(req.body)));
}

const getMissionsByStoreId = async (req, res, next) => {
    const { storeID, page = 1, pageSize = 10 } = req.query;
    const missionPagination = await storeProvider.getMissionsByStoreId(storeID, parseInt(page), parseInt(pageSize));
    res.send(response(status.SUCCESS, missionPagination));
}
export default {
    addStore,
    addMission,
    getMissionsByStoreId
};