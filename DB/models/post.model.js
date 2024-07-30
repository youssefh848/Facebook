import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import User from "./user.model.js";


const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { timestamps: true });

User.hasMany(Post, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

Post.belongsTo(User)



export default Post ;