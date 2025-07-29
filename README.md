<h1 align="center">🚚✨ E-Shift Logistics – Backend API ✨📦</h1>

<p align="center">
  <strong>Reliable • Scalable • Smart</strong><br>
  💻 Node.js + Express + TypeScript + MongoDB ⚙️
</p>


## 📦 Features

- 🔐 **JWT-based Authentication**  
- 👥 **Role Management** (Admin, Customer, Driver)  
- 📋 **Job Creation & Assignment**  
- 📦 **Load Handling & Association**  
- 📊 **Status Tracking** for Jobs  
- 📧 **Email Notification Support**  
- 📁 Clean folder structure and reusable service layers  

---

## ⚙️ Technologies

| Layer       | Tech Used                         |
|-------------|-----------------------------------|
| Runtime     | Node.js + Express.js              |
| Language    | TypeScript                        |
| Database    | MongoDB (Mongoose ODM)            |
| Auth        | JWT (Access + Refresh Tokens)     |
| Email       | Nodemailer                        |
| CORS        | Enabled                           |
| Security    | Bcrypt for password hashing       |

---

## 🚀 Getting Started

### 🔁 Clone the repo
```bash
git clone https://github.com/your-username/e-shift-backend.git
cd e-shift-backend
```

---
## 📦 Install dependencies
```bash
npm install
```

---
## ⚙️ Environment Variables (.env)

### Create a .env file in the root:
```properties
PORT=5000
MONGODB_URI=mongodb://localhost:27017/eshift
JWT_SECRET=your_jwt_secret
REFRESH_SECRET=your_refresh_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

---
## 🧪 Run the app
```bash
npm run dev
```

---
## 🚢 Production mode:
```bash
npm start
```

---
## 📬 API Endpoints Overview
| Method | Endpoint              | Description             | Protected |
| ------ | --------------------- | ----------------------- | --------- |
| POST   | `/api/auth/register`  | Register a new user     | ❌         |
| POST   | `/api/auth/login`     | Login and receive token | ❌         |
| GET    | `/api/jobs`           | Get all jobs            | ✅         |
| POST   | `/api/jobs`           | Create a job            | ✅         |
| POST   | `/api/loads`          | Create a new cargo load | ✅         |
| GET    | `/api/loads`          | Get all loads           | ✅         |
| POST   | `/api/email/register` | Send welcome email      | ✅         |


---
## 🛠️ Folder Structure
📦e-shift-backend
```
 ┣ 📁controllers
 ┣ 📁routes
 ┣ 📁models
 ┣ 📁services
 ┣ 📁middleware
 ┣ 📁utils
 ┣ 📄server.ts
 ┗ 📄.env
```
---

## 📩 Email Service (Nodemailer)

```bash
await transporter.sendMail({
  from: EMAIL_USER,
  to: recipientEmail,
  subject: "Welcome to E-Shift Logistics",
  html: `<h2>Hello ${username}, welcome aboard! 🎉</h2>`
});
```

---

## 📢 Contribution
### Found a bug? Have a suggestion? PRs are welcome!
Clone, branch, commit, and raise a PR 🚀

---

## 👩‍💻 Developed By
### IJSE GDSE - 70th Batch, Galle
Final Coursework for Rapid Application Development

---

## Ready to streamline your logistics? Let’s roll with E-Shift! 🛻💨





