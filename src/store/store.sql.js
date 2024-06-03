const queries = {
    addStoreToRegion: "INSERT INTO store (storeID, storeName, address, description, regionID) VALUES (?, ?, ?, ?, ?)",
    addMissionToStore: "INSERT INTO mission (missionID, missionTitle, missionDescription, missionPoints, storeID) VALUES (?, ?, ?, ?, ?)",
    getMissionsByStoreIDWithPagination: "SELECT * FROM mission WHERE storeID = ? LIMIT ? OFFSET ?",
    getTotalMissionCountByStoreID: "SELECT COUNT(*) as count FROM mission WHERE storeID = ?"
};

export default queries;
