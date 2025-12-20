const Task = require("../models/Task")
console.log("Type of Task at load time:", typeof Task);

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("assignedUser");
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err.message });
  }
};
exports.getTasksByUser = async (req, res) => {
  const tasks = await Task.find({ assignedUser: req.params.userId })
  res.json(tasks)
}

exports.updateTaskStatus = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  )
  res.json(task)
}
