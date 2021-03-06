const { model, Schema } = require('mongoose')

const postSchema = new Schema({
    title: String,
    body: String,
    username: String,
    img: String,
    createdAt: String,
    causes: [String],
    comments: [
        {
            body: String,
            username: String,
            createdAt: String,
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }


})

module.exports = model('Post', postSchema)