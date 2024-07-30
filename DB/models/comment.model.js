import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import User from "./user.model.js";
import Post from "./post.model.js";


const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { timestamps: true });

User.hasMany(Comment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})
Comment.belongsTo(User)

Post.hasMany(Comment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})


Comment.belongsTo(Post)


export default Comment ;
