const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

//get users register
exports.registerController = async(req, res) => {
    try {
        const { username, email, password } = req.body;
        // validation
        if (!username || !email || !password) {
            return res.status(400).send({
                message: "Please Fill All Fields",
                success: false,
            });
        }

        // check existing user
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(401).send({
                message: "User Already Exists!",
                success: false,
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password, salt);

        // save new user
        const user = new userModel({ username, email, password: hashpassword });
        await user.save();
        return res.status(201).send({
            message: "New User Created",
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Register callback",
            error: error,
            success: false,
        });
    }
};

//get users login
exports.loginController = async(req, res) => {
    try {
        const { email, password } = req.body;
        // validation
        if (!email || !password) {
            return res.status(400).send({
                message: "Please provide email & password",
                success: false,
            });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(200).send({
                message: "User Doesn't Exists!",
                success: false,
            });
        }

        // password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                message: "Invalid username or password",
                success: false,
            });
        }

        return res.status(200).send({
            success: true,
            message: "Login Successfully",
            user: user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Login callback",
            error: error,
            success: false,
        });
    }
};

//get all users
exports.getAllUsers = async(req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            success: true,
            message: "all user data",
            users: users,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Get All Users",
            error: error,
            success: false,
        });
    }
};