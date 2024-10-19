require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET||'default_key';
module.exports={
    JWT_SECRET,
}