# 🚗 DriveFleet Car Rental Platform

A full-stack Car Rental Platform where users can explore cars, book vehicles, and manage their own car listings with secure authentication and modern UI.

---


---

## ✨ Features

- 🔐 Secure authentication (JWT + Cookies)
- 🚗 Add, update, delete car listings
- 📋 Explore available cars (grid layout)
- 🔍 Search cars by name using MongoDB regex
- 🏷️ Filter cars by type (SUV, Sedan, Luxury, etc.)
- 📅 Booking system with driver option & notes
- 📊 Booking count update using `$inc`
- 👤 My Bookings & My Added Cars dashboard
- 📱 Fully responsive UI (mobile, tablet, desktop)
- ⚡ Protected private routes (auth required)
- 🧠 Page reload safe authentication system

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS
- Lucide React Icons
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- HTTPOnly Cookies

---

## 🚗 Core Functionalities

### 🔑 Authentication
- User Register & Login system
- Google login support
- Password validation:
  - Minimum 6 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
- Secure JWT stored in HTTPOnly cookie

---

### 🚘 Car Management
- Add new car (private route)
- Edit own car listing
- Delete own car listing with confirmation
- View all available cars
- Car details page

---

### 📅 Booking System
- Book a car with:
  - Driver option (Yes/No)
  - Special notes
- Booking saved in MongoDB
- Auto timestamp using `new Date()`
- Booking count increases automatically using `$inc`

---

### 🔍 Search & Filter
- Search by car name using `$regex`
- Filter by car type

---

## 📱 Responsive Design
- Mobile friendly
- Tablet optimized
- Desktop ready UI

---

## 🚀 Deployment
- Frontend: Vercel
- Backend: Vercel

---

## ⚠️ Important Notes
- No Lorem Ipsum used
- No default alerts used (toast used for all messages)
- Fully protected private routes
- Reload-safe authentication system
- Clean recruiter-friendly UI

---

## 👨‍💻 Developer
**Md Shamim Hasan**

---

