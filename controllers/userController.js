// const { countReset } = require('console')
const { Thought, User } = require('../models')

module.exports = {
    getUsers(req, res) {
        User.find()
          .then(async (users) => {
            const userObj = {
              users,
              headCount: await headCount(),
            };
            return res.json(userObj);
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
      createUser(req, res) {
        User.create(req.body)
          .then((username) => res.json({username, email}))
          .catch((err) => res.status(500).json(err));
      },



      getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then(async (user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json({
                  username,
                  email
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

}