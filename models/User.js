const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
        match:[/.+@.+\..+/,"Must be a valid email"]

    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: createdAtVal => dateFormat(createdAtVal)
    // },


    thoughts: [
      {
        type:schema.Types.ObjectId,
        ref:'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendsCount').get(function() {
  return this.friends.reduce(
    (total, comment) => total + friends.replies.length + 1,
    0
  );
});

const User = model('User', UserSchema);

module.exports = User;
