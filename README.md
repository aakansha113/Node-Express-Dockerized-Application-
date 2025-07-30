# Node-Express-Dockerized-Application
This project demonstrates how to build and run a Node.js Express application inside a Docker container, making it portable and easy to deploy.

## ✅ Features
-Simple Express.js API with multiple routes
-Dockerized for portability
-Configurable environment variables
-REST API with /, /about, /status, /health endpoints
-Lightweight Alpine-based Node image

## 📂 Project Structure
node-app/
│
├── app.js              # Main application file
├── package.json        # Node.js dependencies & scripts
├── Dockerfile          # Docker build instructions
├── .dockerignore       # Files ignored by Docker
└── public/             # Static assets (if any)

## -Prerequisites
1-Node.js (for local run)
2-Docker (for containerization)

## -🛠 Step 1: Install Dependencies Locally
#npm install

## ▶️ Step 2: Run Locally
#npm start

## Access the app at:
#http://localhost:5000

## 🐳 Step 3: Dockerize the App
✅ Build Docker Image:
#docker build -t node-app:v1 .

## ✅ Run Container:
#docker run -dit --name node-container -p 5000:5000 node-app:v1

## check running containers:
#docker ps

## Access the app:
curl http://localhost:5000/          OR  http://localhost:5000/
curl http://localhost:5000/about     OR  http://localhost:5000/about  
curl http://localhost:5000/health    OR  http://localhost:5000/health  
curl http://localhost:5000/status    OR http://localhost:5000/status
