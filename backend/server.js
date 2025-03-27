const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/stocks", async (req, res) => {
  try {
    const symbol = req.query.symbol || "AAPL";
    const response = await axios.get("https://www.alphavantage.co/query", {
      params: {
        function: "TIME_SERIES_INTRADAY",
        symbol: symbol,
        interval: "1min",
        apikey: process.env.ALPHA_API_KEY,
      },
    });

    if (!response.data) {
      return res.status(500).json({ error: "Invalid response from API" });
    }

    const timeSeries = response.data["Time Series (1min)"];
    const latestTimestamp = Object.keys(timeSeries)[0];
    const stockData = Object.entries(timeSeries).map(([time, data]) => ({
      time,
      price: parseFloat(data["1. open"]),
    }));

    res.json(stockData.reverse());
  } catch (error) {
    console.error("Error fetching stock data: ", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

app.get("/api/news", async (req, res) => {
  try {
    const query = req.query.q || "OpenAI";

    const response = await axios.get(
      "https://content.guardianapis.com/search",
      {
        params: {
          q: query,
          tag: "technology/technology",
          "api-key": process.env.GUARDIAN_API_KEY,
          "show-fields": "headline,thumbnail",
          "page-size": 50,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news: ", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(port, () => {
  console.log("Server is running");
});
