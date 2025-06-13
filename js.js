fetch('https://your-gps-server.com/api/locations', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
  .then(response => response.json())
  .then(data => {
    // Use the data to update your map
    // Example: L.marker([data.lat, data.lng]).addTo(map);
  })
  .catch(error => console.error('Error fetching GPS data:', error));