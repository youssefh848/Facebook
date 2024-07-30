import express from 'express'
import db_connection from './DB/connection.js';
import userRouter from "./src/modules/users/user.routes.js";
import postRouter from "./src/modules/posts/post.routes.js";
import commentRouter from "./src/modules/comments/comment.routes.js"

const app = express()
const port = process.env.port || 3000
app.use(express.json());
app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)





db_connection()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))