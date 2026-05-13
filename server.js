const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROOT ROUTE */
app.get("/", (req, res) => {
  res.send("Agriculture Backend API Running");
});

/* CROP MARKET DATA */
const crops = [
  {
    id: 1,
    name: "Rice",
    price: 2500,
    status: "Stable",
    season: "Kharif",
  },
  {
    id: 2,
    name: "Wheat",
    price: 1800,
    status: "Increased",
    season: "Rabi",
  },
  {
    id: 3,
    name: "Cotton",
    price: 3200,
    status: "High Demand",
    season: "Kharif",
  },
  {
    id: 4,
    name: "Maize",
    price: 2100,
    status: "Moderate",
    season: "Summer",
  },
  {
    id: 5,
    name: "Tomato",
    price: 3000,
    status: "High Demand",
    season: "All Season",
  },
  {
    id: 6,
    name: "Onion",
    price: 2800,
    status: "Stable",
    season: "Winter",
  },
];

/* API ROUTE */
app.get("/api/crops", (req, res) => {
  res.json(crops);
});

/* SEARCH API */
app.get("/api/crops/search/:name", (req, res) => {
  const search = req.params.name.toLowerCase();

  const result = crops.filter((crop) =>
    crop.name.toLowerCase().includes(search)
  );

  res.json(result);
});

/* WEATHER SAMPLE API */
app.get("/api/weather", (req, res) => {
  res.json({
    location: "Madurai",
    temperature: "32°C",
    humidity: "70%",
    condition: "Cloudy",
    windSpeed: "12 km/h",
  });
});

/* DASHBOARD SUMMARY API */
app.get("/api/dashboard", (req, res) => {
  res.json({
    totalCrops: crops.length,
    marketStatus: "Active",
    alerts: 3,
    farmers: 150,
  });
});

/* SERVER */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});