const router =require ('express').Router();

const {
    getThoughts,
    getOneThought,
    createThought,
    thoughtUpdate,
    deleteThought
}= require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(thoughtUpdate)
    .delete(deleteThought);

module.exports =router;