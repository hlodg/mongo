const { countReset } = require('console')
const { Thought, User } = require('../models')

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then(thoughts)=> res.json(thoughts)
                .catch((error) => res.status(500).json(error));
    },
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-_v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'no thought with this id' })
                    : res.json(thought));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    thoughtUpdate(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
          .then((course) =>
            !course
              ? res.status(404).json({ message: 'No thought with that ID' })
              : User.deleteMany({ _id: { $in: course.user } })
          )
          .then(() => res.json({ message: 'Thought deleted!' }))
          .catch((err) => res.status(500).json(err));
      }
}