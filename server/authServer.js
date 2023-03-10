const express = require("express")
const bcrypt = require("bcrypt")
const app = express()
const db = require("./config/db")
const ejs = require("ejs")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set("view-engine", "ejs")
app.use(cors())

// connecting authServer to database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to DB!", err.stack)
        return
    }
    console.log("Connected to DB as:", db.threadId)
})

// rendering register page
app.get("/register", (req, res) => {
    res.render("./register.ejs")
})

// send to login page
app.get("/login", (req, res) => {
    console.log(req.user)
    res.redirect("http://localhost:5173/")
})

// authenticating user login
app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    db.query(
        "SELECT * FROM users WHERE username=?",
        username,
        async (error, result) => {
            console.log(result[0])
            let isValid = false
            if (error) return res.status(500).send(isValid)
            else if (!result.length) return res.status(404).send(result)
            else {
                const user = result[0]
                isValid = await bcrypt.compare(password, user.password)
            }
            return res.json({ isValid: isValid, role: result[0].role })
        }
    )
})

// creating user
app.post("/register", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    db.query(
        "INSERT INTO users(username, password) VALUES(?,?);",
        [username, hashedPassword],
        (error, result) => {
            if (error) return res.status(500).send("Error in registration!")
            res.render("login.ejs")
        }
    )
})

const port = parseInt(process.env.AUTH_PORT) || 9900
app.listen(port, () => console.log("auth server started on port:", port))

// function authenticateToken(req, res, next) {}

// app.get("/update-user", (req, res) => {
// 	res.redirect("http://localhost:5173/user/update")
// })

// update user
// app.patch("/update-user", (req, res) => {
// 	const oldUsername = req.body.username
// 	const newUsername = req.body.newUsername
// 	const oldPassword = req.body.oldPassword
// 	const newPassword = req.body.newPassword

// 	db.query(
// 		"UPDATE users SET username = ?, password = ? WHERE username = ?, password = ?",
// 		[newUsername, newPassword, oldUsername, oldPassword],
// 		(error, result) => {
// 			if (error) return res.status(500).send(result)
// 			return res.send(result)
// 		}
// 	)
// })

// deleting user
// app.delete("/delete-user", (req, res) => {
// 	const username = req.body.username

// 	db.query(
// 		"DELETE * FROM users WHERE username=?",
// 		username,
// 		(error, result) => {
// 			if (error) return res.status(500).send(error)
// 			return res.send(result)
// 		}
// 	)
// })
