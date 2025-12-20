const API_URL = 'http://localhost:5000/api';

// Fetch Users for the Dropdown
async function loadUsers() {
    const res = await fetch(`${API_URL}/users`);
    const users = await res.json();
    const select = document.getElementById('user-select');
    users.forEach(user => {
        const opt = document.createElement('option');
        opt.value = user._id;
        opt.textContent = user.name;
        select.appendChild(opt);
    });
}

// Fetch and Display Tasks
async function loadTasks() {
    const res = await fetch(`${API_URL}/tasks`);
    const tasks = await res.json();
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = tasks.map(task => `
        <div class="task-item">
            <strong>${task.title}</strong><br>
            <small>${task.description || 'No description'}</small><br>
            <span>Assigned to: ${task.assignedUser?.name || 'Unknown'}</span>
            <div class="status">${task.status}</div>
        </div>
    `).join('');
}

// Handle Form Submission
document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const taskData = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        assignedUser: document.getElementById('user-select').value
    };

    const res = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
    });

    if (res.ok) {
        document.getElementById('task-form').reset();
        loadTasks(); // Refresh list
    }
});

// Initialize
loadUsers();
loadTasks();