const { db } = require('../lib/db.connection')

async function getUsers(req, res, next) {
    try {
        const result = await db.many(`SELECT * FROM "demo"."users" where "user_id" = 51000`);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message ? error.message : 'Something went wrong' });
    }
}

async function addUser(req, res, next) {
    try {
        await db.none(`INSERT INTO "demo"."users"("username","password","email") VALUES($1,$2,$3)`, [`${req.body.username}`, `${req.body.password}`, `${req.body.email}`]);
        return res.status(201).json({ message: 'User Created Successfully!' });
    } catch (error) {
        return res.status(500).json({ message: error.message ? error.message : 'Something went wrong' });
    }
}



async function updateUser(req, res, next) {
    try {
        await db.none(`UPDATE "demo"."users" SET "username" = $1, "password" = $2, "email" = $3 WHERE "user_id" = $4`, [req.body.username, req.body.password, req.body.email, req.body.userId]);
        return res.status(200).json({ message: 'User Updated Successfully!' });
    } catch (error) {
        return res.status(500).json({ message: error.message ? error.message : 'Something went wrong' });
    }
}



async function deleteUser(req, res, next) {
    try {
        await db.none(`DELETE FROM "demo"."users" WHERE user_id = $1`, [req.query.userId]);
        return res.status(200).json({ message: 'User Deleted Successfully!' });
    } catch (error) {
        return res.status(500).json({ message: error.message ? error.message : 'Something went wrong' });
    }
}



module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}