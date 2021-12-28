const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema=require("./Reaction")

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },

    userName:{
      type:String,
      required:true,

    },



    // use ReplySchema to validate data for a reply
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
           getters: true
    },
    id: false
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

