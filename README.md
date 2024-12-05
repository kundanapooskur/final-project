# CrowdHive - College Event Management Website  
**Streamlining Event Management for College Campuses**  

**CrowdHive**- is an event management platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It helps users to create, view, and delete events easily. The frontend is made with React and has 11 components along with one main file called `App.js`. These components make the website look good and work smoothly. 

The backend is created using Node.js and Express.js. It includes 1 middleware to handle tasks like checking user authentication, 3 models to store data in the database (like user and event details), 4 routes to handle different API requests, and one main file, `server.js`, which runs the server. 

One important feature is deleting events. You can do this by sending a `DELETE` request to the endpoint `http://localhost:8000/api/events/delete/:eventID`, where `eventID` is the unique ID of the event you want to delete.

To run the project on your computer, you need Node.js and MongoDB installed. First, install all the required packages using `npm install`. Then, start the backend server with `node server.js` and run the frontend using `npm start`. You can access the website at `http://localhost:3000`.

This project uses React for the user interface, Node.js and Express.js for the backend, and MongoDB to store data. It is simple, organized, and easy to use. In the future, features like user login, real-time notifications, and advanced integrations can be added to make it even better.


---

## 🚀 Features  
- **Event Creation**: Create and manage events with details like title, description, date, time, and venue.  
- **User Registration**: Students can browse events, register, and track their participation history.  
- **Admin Dashboard**: View and manage event details, track registration analytics, and oversee event success.  
- **Responsive Design**: Accessible on desktops, tablets, and mobile devices for convenient use anytime, anywhere.  

---

## 🛠️ Tech Stack  
- **Frontend**: React.js with Redux for state management  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Styling**: CSS and Bootstrap for a clean and responsive UI  

---

## 📌 Setup Instructions  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Harshjangid015/EduVents---College-Event-Management-Website-MERN.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd EduVents
   ```
3. Install dependencies for both frontend and backend:  
   ```bash
   cd client && npm install  
   cd ../server && npm install  
   ```
4. Set up a `.env` file for your backend with the required variables:  
   - `MONGO_URI`: MongoDB connection string  
   - `JWT_SECRET`: Secret key for JWT authentication  

5. Run the application:  
   - Start the server:  
     ```bash
     cd server && npm start
     ```
   - Start the client:  
     ```bash
     cd client && npm start
     ```
6. Open your browser and visit `http://localhost:3000`.

---

## 🌟 Highlights  
- Full-stack implementation using the MERN stack.  
- Focused on delivering a seamless user experience for event creation and registration.  
- Real-time updates and secure authentication with JWT.  

 

---

Take a look, explore the project, and let me know your thoughts! 😊  

--- 
