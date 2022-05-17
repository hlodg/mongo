const {Schema, Types, model}=require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema({
    thoughtText:{
        type: String, 
        require: true,
        min: 1,
        max: 280
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    username:{
        type: String,
        require: true
    },
    reactions:[reactionSchema],
},
{
    toJSON: {
      virtuals: true
    },
  }
);

thoughtSchema 
  .virtual('reactionCount')
  .get(function(){
      return `${this.reactions.length}`
  })

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
const Thought = model('thought', thoughtSchema);

module.exports = Thought;