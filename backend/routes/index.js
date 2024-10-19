// backend/api/index.js

const {Router} = require("express")
const userRouter = require("./user")
const router = Router();
const mailer = require("./mail")
router.use("/user", userRouter)
// router.use("/mail", mailer)

module.exports = router;