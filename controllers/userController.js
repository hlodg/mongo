// const { countReset } = require('console')
const { Thought, User } = require('../models')

module.exports = {
    getUsers(req, res) {
        User.find()
          .then(async (users) => {
            const userObj = {
              users
              // headCount: await headCount,
            };
            return res.json(userObj);
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
      createUser(req, res) {
        console.log('You are adding an user');
        //   console.log (req)
        User.create(req.body)
          .then((userdata) => res.json(userdata))
          .catch((err) =>  res.status(500).json(err));
      },



      getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then(async (user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json({ user
                })
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

      addUser(req, res) {
        console.log('You are adding an user');
        console.log(req.body);
        Student.findOneAndUpdate(
          { _id: req.params.userId },
          { runValidators: true, new: true }
        )
          .then((username) =>
            !username
              ? res
                  .status(404)
                  .json({ message: 'No user found with that ID :(' })
              : res.json(student)
          )
          .catch((err) => res.status(500).json(err));
      },

      deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No such user exists' })
              : User.findOneAndUpdate(
                  { userId: req.params.userId },
                  { $pull: { students: req.params.userId } },
                  { new: true }
                )
          )
          .then((thought) =>
            !thought
              ? res.status(404).json({
                  message: 'User deleted, but no courses found',
                })
              : res.json({ message: 'User successfully deleted' })
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

}