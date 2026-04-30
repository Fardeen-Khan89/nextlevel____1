const express = require('express');
const app = express();
const path=require('path');

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Sample API
app.get('/api/data', (req, res) => {
  res.json({
    message: "Hello from API 👋"
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});