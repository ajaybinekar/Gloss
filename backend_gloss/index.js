const express= require("express");
require("./db/config");
const User = require("./db/User");
const app = express();
app.use(express.json());
app.post("/register", async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists" });
        }
        const user = new User(req.body);
        const result = await user.save();
        console.log("User created:", result);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});   