// backend/index.js
const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();
app.use(cors());
// At the very top of your entry file (e.g., index.js or app.js)
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
console.log("JWT_SECRET:", JWT_SECRET); // This should print your secret key


app.use(express.json());

app.use("/api/v1", rootRouter);
const port =3000;
app.listen(port, ()=>console.log(`listining on port ${port}`));
