import mongoose from "mongoose";

const postSongSchema = mongoose.Schema({
    title: String,
    message: String,
    artist: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});


const PostSong = mongoose.model("PostSong", postSongSchema);

export default PostSong;