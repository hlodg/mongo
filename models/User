const {Schema, Types, model }=require('mongoose');

const userSchema = new Schema ({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true        
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }
    ],
    friends: 
        // foreign key reference user model
        [
            {
                type: Schema.Types.ObjectId, 
                ref: 'User'
            }
        ]
    })

    toJSON: {
        vrituals: true
    }



// userSchema 
//   .vritual('friendCount')
//   .get(function(){
//       return `${this.friends.length}`
//   })
//   .set(function(v){
//       this.set({friends})
//   })
// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.


const User = model('user', userSchema);

module.exports = User;