const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReply,
  removeReply
} = require('../../controllers/Thought-controller');

// /api/Thoughts/<UserId>
router.route('/:UserId').post(addThought);

// /api/Thoughts/<UserId>/<ThoughtId>
router
  .route('/:UserId/:ThoughtId')
  .put(addReply)
  .delete(removeThought);

// /api/Thoughts/<UserId>/<ThoughtId>/<replyId>
router.route('/:UserId/:ThoughtId/:replyId').delete(removeReply);

module.exports = router;
