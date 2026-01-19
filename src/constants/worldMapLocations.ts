export const worldMapLocations = [
  // --- Americas & Europe Flow to Senegal ---
  // Brazil -> USA
  {
    start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
    end: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
  // --- Asia & Middle East Flow to Gambia ---
  // China -> India
  {
    start: { lat: 39.9042, lng: 116.4074, label: "Beijing" },
    end: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  },
  // --- South Africa Flow ---
  // Cape Town -> Kenya
  {
    start: { lat: -33.9249, lng: 18.4241, label: "Cape Town" },
    end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
  },

  // --- Americas & Europe Flow Step 2 ---
  // USA -> UK
  {
    start: { lat: 40.7128, lng: -74.006, label: "New York" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  // --- Asia & Middle East Flow Step 2 ---
  // India -> UAE
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 24.4539, lng: 54.3773, label: "Abu Dhabi" },
  },
  // --- South Africa Flow Step 2 ---
  // Kenya -> Gambia
  {
    start: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
    end: { lat: 13.4432, lng: -15.3101, label: "Gambia" },
  },

  // --- Americas & Europe Flow Step 3 ---
  // UK -> France
  {
    start: { lat: 51.5074, lng: -0.1278, label: "London" },
    end: { lat: 48.8566, lng: 2.3522, label: "Paris" },
  },
  // --- Asia & Middle East Flow Step 3 ---
  // UAE -> Saudi
  {
    start: { lat: 24.4539, lng: 54.3773, label: "Abu Dhabi" },
    end: { lat: 24.7136, lng: 46.6753, label: "Riyadh" },
  },

  // --- Americas & Europe Flow Step 4 ---
  // France -> Senegal
  {
    start: { lat: 48.8566, lng: 2.3522, label: "Paris" },
    end: { lat: 14.4974, lng: -14.4524, label: "Senegal" },
  },
  // Berlin -> Paris (Joiner)
  {
    start: { lat: 52.52, lng: 13.405, label: "Berlin" },
    end: { lat: 48.8566, lng: 2.3522, label: "Paris" },
  },

  // --- Asia & Middle East Flow Step 4 ---
  // Saudi -> Egypt
  {
    start: { lat: 24.7136, lng: 46.6753, label: "Riyadh" },
    end: { lat: 30.0444, lng: 31.2357, label: "Cairo" },
  },
  // Kuwait -> Saudi (Joiner)
  {
    start: { lat: 29.3759, lng: 47.9774, label: "Kuwait City" },
    end: { lat: 24.7136, lng: 46.6753, label: "Riyadh" },
  },

  // --- Final Convergence ---
  // Egypt -> Gambia
  {
    start: { lat: 30.0444, lng: 31.2357, label: "Cairo" },
    end: { lat: 13.4432, lng: -15.3101, label: "Gambia" },
  },
  // Doha -> Saudi (Joiner late)
  {
    start: { lat: 25.2854, lng: 51.531, label: "Doha" },
    end: { lat: 24.7136, lng: 46.6753, label: "Riyadh" },
  },
];
