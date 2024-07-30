import User from "../../../DB/models/user.model.js";
import bcrypt from "bcrypt";




export const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exist" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({message: "User created sucessfully",user});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const login =  async (req, res) => {
    const { email, password } = req.body;
    
        // Find the user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Check the password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid  password" });
        }

    const loginStatus = await user.update({loginStatus: true})
    res.status(200).json({message: "User logged in sucessfully",user});
    }

export const logOut = async (req,res) => {
    const {id} = req.query;
    const loginStatus = await User.update({loginStatus: false},{where: {id}})
    res.status(200).json({message: "User logged out sucessfully",loginStatus});

}