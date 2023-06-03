import PostSong from "../models/postSong.js";

export const getPosts = async (req, res) => {
    try {
        const postSongs = await PostSong.find();

        console.log(postSongs);

        res.status(200).json(postSongs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostSong(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
