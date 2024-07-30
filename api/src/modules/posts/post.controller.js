
import Post from "../../../DB/models/post.model.js";
import User from "../../../DB/models/user.model.js";

export const addPost = async(req, res) =>{
   
        const {title, content, UserId} = req.body;
        const user = await User.findOne({ where:{ id: UserId , loginStatus: true} })
        if(!user) {
            return res.status(404).json({message: "User not logged in"})
            }
            const post = await Post.create({title, content, UserId})
            return res.status(201).json({message: "Post created successfully", post})            
}

export const getPosts = async (req,res) => {
    const posts = await Post.findAll()
    return res.status(200).json({posts})
}

export const updatePost = async (req,res) => {
    const {id} = req.query;
    const {title, content ,UserId} = req.body;
    const post = await Post.findOne({where: {id, UserId}})
    if(!post) {
        return res.status(404).json({message: "Post not found"})
        }
        post.title = title;
        post.content = content;
        post.UserId = UserId;
        await post.save();
        return res.status(200).json({message: "Post updated successfully", post})
        
}

export const deletePost = async (req,res) => {
    const {id} = req.query;
    const {UserId} = req.body;
    const post = await Post.findOne({where: {id, UserId}})
    if(!post) {
        return res.status(404).json({message: "Post not found"})
        }
        await post.destroy();
        return res.status(200).json({message: "Post deleted successfully"})
}

export const getSpecificPost = async (req,res) => {
    const post = await Post.findAll({
        include:{model: User,
            attributes : {exclude : ['password', 'loginStatus', 'id']}
        }
    })
    res.json({ message: "post fetched sucssesfully" , post})

}