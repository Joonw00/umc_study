const queries = {
    addStoreToRegion: "INSERT INTO store (storeID, storeName, address, description, regionID) VALUES (?, ?, ?, ?, ?)",
    addMissionToStore: "INSERT INTO mission (missionID, missionTitle, missionDescription, missionPoints, storeID) VALUES (?, ?, ?, ?, ?)"
};

export default queries;
