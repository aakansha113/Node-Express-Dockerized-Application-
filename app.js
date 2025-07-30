const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello! This is a Node.js + Express app.');
});

app.get('/about', (req, res) => {
    res.send('About Page: A simple Express app demonstrating Docker deployment.');
});

app.get('/status', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', uptime: process.uptime() });
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`✅ App running on http://localhost:${port}`);
});


