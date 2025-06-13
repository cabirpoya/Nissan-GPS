const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/gps', (req, res) => {
  fs.readFile('p_data.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'No data available' });
    const lines = data.trim().split('\n');
    const lastLine = lines[lines.length - 1];
    // Parse your GPS data format here. Example assumes CSV: lat,lng,timestamp
    const [lat, lng, timestamp] = lastLine.split(',');
    res.json({ lat: parseFloat(lat), lng: parseFloat(lng), timestamp });
  });
});

app.listen(PORT, () => {
  console.log(`GPS API server running at http://localhost:${PORT}/api/gps`);
}); 