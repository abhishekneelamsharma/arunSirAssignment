const express = require("express");
const router = new express.Router();

const User = require("./DB/schema");

router.use(express.json());


router.post("/signup", async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body;

        if (!name || !email || !password || !cpassword) {
            return res.status(401).json({ error: "please fill all the fields" });
        }
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.status(401).json({ error: "user already exist" });
        }
        if (password !== cpassword) {
            return res.status(401).json({ error: "password doesn't match" });
        }

        const newUser = new User({ name, email, password, cpassword });
        const data = await newUser.save();
        console.log(data);
        res.status(200).json({ msg: "user registered successfully" });
    } catch (err) {
        console.log(err);
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            return res.status(401).json({ error: "please fill all the fields" });
        }
        const checkUser = await User.findOne({ email, password });
        if (!checkUser) {
            return res.status(401).json({ error: "please check credentials" });
        }
        return res.status(200).json({ error: "login successfully" });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;