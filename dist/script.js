// Include Leaflet library
const script = document.createElement('script');
script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
document.head.appendChild(script);

script.onload = () => {
  // Leaflet map initialization
  const map = L.map('map').setView([37.7749, -122.4194], 10); // Set initial coordinates and zoom level
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
};