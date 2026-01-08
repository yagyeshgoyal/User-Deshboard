# 📝 User Dashboard – Notes App (MERN Stack)

A full-stack **User Dashboard & Notes Application** built using the **MERN stack**.  
Users can **sign up, log in, create notes, view their notes, and delete notes**, with secure authentication using JWT.

---

## 🚀 Live Demo

- **Frontend**: user-deshboard.vercel.app


> ⚠️ Backend may take a few seconds to wake up due to Render cold start.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- CORS

---

## ✨ Features

- User Authentication (Login & Signup)
- JWT-based Authorization
- Create Notes
- Read User-Specific Notes
- Delete Notes
- Protected Routes
- Persistent Login using `localStorage`
- Responsive UI

---

## 📂 Project Structure

### Backend
```
backend/
│── config/
│   └── database.js
│── controllers/
│   ├── userController.js
│   └── noteController.js
│── middleware/
│   └── auth.js
│── models/
│   ├── userModel.js
│   └── noteModel.js
│── routers/
│   ├── userRoute.js
│   └── noteRoute.js
│── server.js
│── .env
```

### Frontend
```
frontend/
│── src/
│   ├── context/
│   │   └── ShopContext.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│── .env
```

---

## 🔐 Authentication Flow

1. User logs in / signs up
2. Backend returns a JWT token
3. Token is stored in `localStorage`
4. Token is sent in `Authorization` header
5. Protected routes verify token using middleware

---

## 🧪 API Endpoints

### User Routes
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/yogi/v1/user/register` | Register user |
| POST | `/yogi/v1/user/login` | Login user |

### Notes Routes (Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/yogi/v1/notes` | Get user notes |
| POST | `/yogi/v1/notes` | Create note |
| DELETE | `/yogi/v1/notes/:id` | Delete note |

---

## ⚙️ Environment Variables

### Backend (`.env`)
```env
PORT=4000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```

### Frontend (`.env`)
```env
VITE_BACKEND_URL=https://backend.onrender.com
```

---

## 🏃‍♂️ Run Locally

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🚨 Common Issues & Fixes

### MongoDB Connection Error
- Ensure IP whitelist includes `0.0.0.0/0` in MongoDB Atlas

### CORS Error
- Confirm frontend URL is added in backend `cors()` config
- Redeploy backend after changes

---

## 📌 Future Improvements

- Edit notes
- Search notes
- Refresh tokens
- Password reset
- Dark mode
- Deployment on same domain

---

## 👨‍💻 Author

**Yagyesh**  
- Full-Stack Developer  
- Skilled in MERN Stack & Backend APIs  

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub!
