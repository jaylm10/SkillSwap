# 🧠 Skill Swap Platform

A MERN stack-based web application that enables users to exchange skills by listing what they offer and what they seek in return — promoting collaborative learning, networking, and peer-to-peer upskilling.

---

## 🚀 Features

### 👤 User Features
- 🔐 Register and login securely using JWT
- ✍️ Create and update personal profile with:
  - Name, location, and profile photo
  - Skills offered and skills wanted
  - Availability preferences (e.g., weekends)
  - Public/private profile visibility
- 🔍 Browse all public user profiles from the Home page
- 📩 Send swap requests (basic alert/placeholder)

### 🛠️ Admin Capabilities (Planned)
- User moderation & banning
- Skill description filtering
- Platform-wide usage reporting

---

## 🏗️ Tech Stack

| Layer       | Technology                     |
|-------------|---------------------------------|
| Frontend    | React.js (Vite), CSS Modules    |
| Backend     | Node.js, Express.js             |
| Database    | MongoDB with Mongoose           |
| Auth        | JWT, bcrypt                     |
| Image Upload| Base64 (Planned: Cloudinary)    |

---

## 🧪 How to Run the Project

### 📦 Prerequisites
- Node.js & npm
- MongoDB (local or MongoDB Atlas)
- Vite (optional)

---

### ⚙️ Backend Setup

```
cd server
npm install
```
Create a .env file:
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend server:
```
npm start
```

### 💻 Frontend Setup
```
cd client
npm install
npm run dev
```

### 🔐 Authentication Flow

- Passwords are encrypted with `bcrypt`
- Auth routes use JWT tokens (stored in `localStorage`)
- Protected routes like `/profile` require a valid token in the headers

---

### 🌐 API Endpoints

#### 🔓 Public

```http
POST /api/register       # Register a new user
POST /api/login          # Login and receive JWT
GET  /api/profiles       # List all public user profiles
POST /api/profile        # Create or update user profile (requires token)
GET  /api/profile        # Fetch own profile for editing
```

### 🧩 Upcoming Features

- ✨ Skill match suggestions using AI
- ⭐ Rating & review system for completed swaps
- 🔄 Real-time swap notifications via Socket.IO
- ☁️ Cloud image uploads (Cloudinary)
- 🗂️ Search & filter by skill, location, availability

---

### 🙌 Authors

- **Jay Parmar** – 🎓 CSE Student | 💻 MERN Stack | Spring Boot | Problem Solver  
- **Anant Vijay** – 🎓 CSE Student | 🎮 Game Developer  
- **Ansh Kedia** – 🎓 CSE Student | 🤖 AI/ML Engineer  

---

### 📃 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

---

### ⭐ Star This Project

If you find this project helpful, feel free to give it a ⭐ on [GitHub](https://github.com)!

