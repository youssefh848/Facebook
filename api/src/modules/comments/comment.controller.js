import Post from "../../../DB/models/post.model.js";
import User from "../../../DB/models/user.model.js";
import Comment from "../../../DB/models/comment.model.js"; // Import the Comment model

export const addComment = async (req, res) => {
  const { content, UserId, PostId } = req.body;
  try {
    const user = await User.findOne({ where: { id: UserId, loginStatus: true } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const comment = await Comment.create({ content, UserId, PostId });
    res.status(201).json({ message: "Comment created successfully", comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating comment" });
  }
};

export const getComments = async (req, res) => {
    const comments = await Comment.findAll()
    res.json(comments)
}

export const UpdateComment = async (req, res) => {
   const{ id} = req.query
    const { content,UserId } = req.body;
    try {
        const comment = await Comment.update({content},{ where: { id, UserId } });
        res.json({message: "comment updated sucessfully ",comment})
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error updating comment" });
            }
    

}

export const DeleteComment = async (req, res) => {
    const { id } = req.query;
    try {
        const comment = await Comment.destroy({ where: { id } });
        res.json({ message: "Comment deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error deleting comment" });
            }

}