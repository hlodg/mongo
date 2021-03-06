const {Schema, Types}=require('mongoose');

const reactionSchema = new Schema({
    reactionId:[
        // * Use Mongoose's ObjectId data type
        // * Default value is set to a new ObjectId
        {
            type: Schema.Types.ObjectId,
            ref: 'ReactionId',
          },
        ],
    reactionBody:{
        type: String,
        require: true,
        max: 280
    },
    username:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        // * Use a getter method to format the timestamp on query
    }
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

module.exports = reactionSchema;