export const addStoreResponseDTO = (storeId) => {
    return {
        "storeId": storeId
    };
}

export const addMissionResponseDTO = (storeId) => {
    return {
        "storeId": storeId
    };
}


export const missionPaginationDTO = (missions, total, page, pageSize) => {
    return {
        missions: missions,
        total: total,
        page: page,
        pageSize: pageSize
    };
};
