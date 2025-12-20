1. Understanding of the Problem
->The goal was to create a Task Management System (TechMecha) that allows users to manage workflows by assigning tasks to specific individuals.
->The primary challenges addressed were:
i)Data Persistence: Ensuring tasks and users are stored in a database (MongoDB) rather than just in memory.
ii)Relational Logic: Linking a "Task" to a "User" using unique identifiers (ObjectIDs) so that each task knows who is responsible for it.
iii)Seamless Integration: Connecting a backend API (Node/Express) to a clean, interactive frontend (HTML/JS) without hitting browser security blocks (CORS).
iv)User Experience: Moving away from technical tools like Postman to a full-portal experience where users can be created and tasks assigned in one UI.

2. Approach & Architecture
->The project follows the MVC (Model-View-Controller) pattern, which is the industry standard for scalable web applications.
i)Frontend (View): A Single Page Application (SPA) built with Vanilla HTML5, CSS3, and JavaScript. It uses the fetch API to communicate with the backend.
ii)Backend (Controller/Routes): A Node.js and Express.js server that handles API requests.
iii)Routes: Define the endpoints (e.g., /api/tasks).
iv)Controllers: Contain the logic (e.g., Task.find()).
v)Database (Model): MongoDB Atlas serves as the cloud database. Mongoose is used to define strict schemas for data integrity.
vi)Middleware: Custom error handling and CORS were implemented to ensure the app is secure and reliable.

3. Steps to Run the Project
To get this project running on a new machine, follow these steps:
Prerequisites
Node.js installed on your system.
A MongoDB Atlas account and connection string.
Setup Instructions
Clone the repository: 
 git clone https://github.com/yourusername/techmecha.git
 cd techmecha
Install dependencies:
 npm install
Configure Environment Variables: Create a .env file in the root directory and add your MongoDB URI:
 MONGO_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/techmecha
 PORT=5000
Run the application:
For development: npm run dev
For production: npm start
Access the Portal: Open your browser and navigate to http://localhost:5000.
Use https://localhost:5000/api/users for seeing the users those who are registered using POST in POSTMAN. 
