const router = require("express").Router();

const{
    getUsers,
    getOneUser,
    createUser,
    addUser,
    deleteUser
} = require ('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getOneUser).delete(deleteUser)

router.route('/:userId/thought').post(addUser);


module.exports= router