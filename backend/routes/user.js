const express = require('express');
const { authMiddleware } = require("../middleware");
const router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Define the schema for signup
const signupBody = zod.object({
    username: zod.string(),
    phone: zod.string().transform(Number), // Accepting string and converting to number
    companyName: zod.string(),
    companyEmail: zod.string().email(),
    employeeSize: zod.string().transform(Number), // Accepting string and converting to number
});

// Clean up incoming request data to remove duplicates
router.post("/signup", async (req, res) => {
    // Clean the request body
    
    const { username, phone, companyName, companyEmail, employeeSize } = req.body;

    // Ensure we're only using the fields defined in the schema
    const cleanedBody = {
        username,
        phone,
        companyName,
        companyEmail,
        employeeSize
    };

    const parsedData = signupBody.safeParse(cleanedBody);
    if (!parsedData.success) {
        console.log(parsedData)
        return res.status(400).json({
            message: "Invalid input data",

         // Send detailed errors
        });
    }
    console.log(parsedData);
    // Check if the user already exists
    const existingUser = await User.findOne({ companyEmail });
    if (existingUser) {
        return res.status(400).json({
            message: "Email already taken",
        });
    }
  
        const user = await User.create({
            username,
            phone,
            companyName,
            companyEmail,
            employeeSize,
        });
        const userId = user._id;

  
        const token = jwt.sign({ userId }, JWT_SECRET);
    
        res.json({
            message: "User created successfully",
            token,
        });
    


    
   
});

// Sign-in route
const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid login credentials",
        });
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
    });

    if (user) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        res.json({ token });
        return;
    }

    res.status(401).json({
        message: "Error while logging in",
    });
});

// Other routes...

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Error while updating information",
        });
    }

    await User.updateOne({ _id: req.userId }, req.body);
    res.json({
        message: "Updated successfully",
    });
});

module.exports = router;
