const queries = {
    insertUserSql : "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);",
    getUserID : "SELECT * FROM user WHERE user_id = ?",
    connectFoodCategory : "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);",
    confirmEmail : "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail",
    getPreferToUserID :
    "SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name "
    + "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id "
    + "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;",
    addUserMission : "INSERT INTO usermission (userMissionId, status, userId, missionId) VALUES (?, ?, ?, ?);",
    checkMissionInProgress : "SELECT EXISTS(SELECT 1 FROM usermission WHERE userId = ? AND missionId = ? AND status = '진행중') as isMissionInProgress"
};

export default queries;
