const express = require('express');
const app = express();
const path = require('path');

// static files (CSS, JS ke liye)
app.use(express.static(__dirname));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API
app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from API 👋"
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});