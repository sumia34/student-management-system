require("dotenv").config();
const express = require("express");
const path = require("path");

const connectDB = require("./config/db.js");

const app = express();

// Connect Database
connectDB();

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test Route
app.get("/file", (req, res) => {
res.render("index");
});

// Routes
const userRoutes = require("./routes/routes");
app.use("/users", userRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log("Server running");
});
