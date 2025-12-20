const express = require("express")
const {
  createTask,
  getTasks,
  getTasksByUser,
  updateTaskStatus
} = require("../controllers/taskController")

const router = express.Router()

router.post("/", createTask)
router.get("/", getTasks)
router.get("/user/:userId", getTasksByUser)
router.put("/:id", updateTaskStatus)

module.exports = router
