# 🛠️ Inventory Management (Node.js + React + Kafka + Zookeeper + MongoDB)

## 📦 Overview
This project implements an **inventory management system** with a **Node.js** backend and **React** frontend. It uses **Apache Kafka** for event-driven communication between services. The frontend offers real-time order tracking features with a clean interface.

---

## ⚙️ Features

### Backend (Node.js + Kafka)
- ✅ **Inventory API** with Node.js Express server  
- 🧠 **Kafka** used as an event bus for asynchronous messaging  
- 🔄 Event-driven architecture  
- 🚀 Fast and scalable Node.js backend  

### Frontend (React)
- 🎯 Responsive UI built with React  
- 🔄 Live updates of inventory and order status  
- 🧼 Clean and modern interface for managing products  

---

## 🧰 Tech Stack

### Backend
- **Node.js** – Backend server  
- **Express.js** – Web framework  
- **Kafka** – Distributed event streaming platform  
- **Zookeeper** – Kafka coordination service
- **MongoDB** - Non-relational database

### Frontend
- **React** – UI development  
- **Axios** – API integration  
- **Tailwind CSS** – Styling  

---

## 🚀 Installation & Setup

### Backend (Node.js + Kafka)

1️⃣ Clone the repository and navigate to backend:
```
git clone https://github.com/ishanshah001/InventoryManagement.git
cd InventoryManagement/backend
```

2️⃣ Install dependencies:
```
npm install
```

3️⃣ Run the backend server:
```
node server.js
```

### Frontend (React)
1️⃣ Navigate to frontend:
```
cd ../frontend
```

2️⃣ Install dependencies:
```
npm install
```

3️⃣ Start the frontend development server:
```
npm run dev
```

### Kafka & Zookeeper Setup (Windows)
Make sure Kafka is downloaded and extracted properly.

1️⃣ Start Zookeeper:
Create a .bat file (e.g., start-zookeeper.bat) with the following content:
```
@echo off
REM Start Zookeeper server
echo Starting Zookeeper...
start cmd /k "bin\windows\zookeeper-server-start.bat config\zookeeper.properties"
```
Run this file to launch Zookeeper in a new terminal window.

2️⃣ Start Kafka server:

Create another .bat file (e.g., start-kafka.bat) with the following content:
```
REM Start Kafka server
echo Starting Kafka...
start cmd /k "bin\windows\kafka-server-start.bat config\server.properties"
```
Run this file to launch Kafka in a new terminal window.

Once Zookeeper and Kafka are running, your backend server will communicate through Kafka topics to handle events asynchronously.
