export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

export const addUserMissionResponseDTO = (userMissionData) => {
    return {
        "status": userMissionData.status,
        "userId": userMissionData.userId,
        "missionId": userMissionData.missionId,
        "createdAt": userMissionData.createdAt,
        "updatedAt": userMissionData.updatedAt
    };
}
