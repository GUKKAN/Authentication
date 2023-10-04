const express = require("express");
const cors = require("cors");
const app = express();
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(express.json()); // Parse JSON requests

const pool = new Pool({
  user: "postgres",
  password: "1",
  host: "localhost",
  port: 5432,
  database: "sample",
});

app.get('/register',async (req,res)=>
{
  res.send('<h1> Registration Successful </h1>')
})

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if the user already exists in the database
    const userExistsQuery = "SELECT * FROM users WHERE email = $1";
    const userExists = await pool.query(userExistsQuery, [email]);

    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const insertUserQuery =
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)";
    await pool.query(insertUserQuery, [firstName, lastName, email, password]);

    return res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database and verify the password
    const findUserQuery = "SELECT * FROM users WHERE email = $1 AND password = $2";
    const user = await pool.query(findUserQuery, [email, password]);

    if (user.rows.length === 1) {
      // Successful login
      const userData = user.rows[0];
      const home = `${userData.first_name} ${userData.last_name}`;
      return res.status(200).json({ success: true, home });
    } else {
      // Invalid login
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
