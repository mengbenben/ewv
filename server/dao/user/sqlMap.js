var userSqls = {
    insert: 'INSERT INTO eagle_user(user_id, user_realname) VALUES(? , ?)',
    update: 'UPDATE eagle_user SET user_realname = ?  WHERE user_id = ?',
    delete: 'DELETE FROM eagle_user WHERE user_id=?',
    queryById: 'SELECT * FROM eagle_user WHERE user_id=?',
    queryAll: 'SELECT * FROM eagle_user'
};
module.exports = userSqls;