const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');
router
  .route('/')
  .get(getThoughts)
  .post(addThought)

// /api/Thoughts/<UserId>
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);
  
// api/thoughts/:thoughtId/reactions
  router
    .route("/:thoughtId/reactions")
    .post(addReaction)


// /api/thoughts/thoughtId/reactions/<reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
