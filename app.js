const express = require("express");
const cors=require("cors");
const path=require("path");
const userRoutes = require("./src/routes/userRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const errorHandler = require("./src/middleware/errorHandler"); // Add this

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// The error handler MUST be the last middleware
app.use(errorHandler); 

module.exports = app;