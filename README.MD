# ✨ Chatify - Real-Time Chat App ✨

Chatify is a simple, modern chat website where you can message your friends instantly. It features secure user accounts, online indicators, custom profile picture uploads, welcome emails, and spam protection.

---

## 🚀 Main Features

- **Real-Time Chat**: Send messages instantly and see who is online right now.
- **Secure Accounts**: Register, log in, and log out safely with encrypted passwords.
- **Profile Customization**: Upload and change your custom profile avatar.
- **Welcome Emails**: Automatically receive a welcome email when you create an account.
- **Spam & Bot Protection**: Keeps the app safe from bots and too many fast requests.
- **Responsive Design**: Looks clean and beautiful on both mobile phones and desktop computers (supports multiple color themes!).

---

## 🛠️ Technologies Used

### 💻 Frontend (What you see)
* **React 19 & Vite 7**: The core framework for building the user interface.
* **Tailwind CSS & daisyUI**: Used for styling, layouts, and color themes.
* **Zustand**: Handles storing and updating app data (like user login status).
* **Socket.io Client**: Connects the frontend to the backend for instant messaging.
* **Axios**: Used to send requests to the server.
* **React Hot Toast**: Displays pop-up notifications (like "Logged in successfully").

### 🧪 Backend (Behind the scenes)
* **Node.js & Express**: Runs the web server and handles requests.
* **MongoDB & Mongoose**: The database used to save user accounts and chat messages.
* **Socket.io Server**: Handles live socket connections to send messages instantly.
* **Arcjet**: Protects the server from hackers, bots, and spam.
* **Resend**: Sends out automated emails to users.
* **Cloudinary**: Stores and serves user profile pictures.

---

## ⚙️ How to Setup Environment Variables

Before starting the app, you need to create configuration files to store keys.

### 1. Backend Setup (`/backend/.env`)
Create a new file named `.env` inside the `backend` folder and add your keys:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_link
NODE_ENV=development
JWT_SECRET=your_secret_login_key

# Frontend URL
CLIENT_URL=http://localhost:5173

# Email Service keys (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=onboarding@resend.dev
EMAIL_FROM_NAME=Chatify

# Profile Image Storage keys (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Security keys (Arcjet)
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

### 2. Frontend Setup (`/frontend/.env`)
Create a new file named `.env` inside the `frontend` folder to link it to the backend:

```env
VITE_API_URL=http://localhost:5000
```

---

## 🔧 How to Run the App Locally

First, make sure you have **Node.js** installed on your computer.

### Step 1: Run the Backend Server
1. Open your terminal.
2. Go to the backend folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
*The server will start running at **http://localhost:5000**.*

---

### Step 2: Run the Frontend App
1. Open a new terminal.
2. Go to the frontend folder:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm run dev
   ```
*The frontend website will open at **http://localhost:5173**.*
