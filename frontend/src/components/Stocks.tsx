import axios from "axios";
import styles from "./Stocks.module.css";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stockNames = ["AAPL", "GOOGL", "META", "MSFT", "TSLA"];
const Stocks = () => {
  const [stockData, setStockData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/stocks?symbol=GOOGL") // Change symbol as needed
      .then((response) => response.json())
      .then((data) => {
        setStockData(data);

        const prices = data.map((d: any) => d.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);

        setMinPrice(min - 0.5); // Adjust range by ±10
        setMaxPrice(max + 0.5);
      })
      .catch((error) => console.error("Error fetching stock data:", error));
  }, []);

  return (
    <div>
      <h3>Global Stocks</h3>
      <div className={styles.stocksContainer}>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockData}>
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <YAxis domain={[minPrice, maxPrice]} tickCount={3} />
              <Tooltip />
              <Line
                dot={false}
                type="natural"
                dataKey="price"
                stroke=" #ffbd00 "
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockData}>
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <YAxis domain={[minPrice, maxPrice]} tickCount={3} />
              <Tooltip />
              <Line
                dot={false}
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={stockData}>
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <YAxis domain={[minPrice, maxPrice]} tickCount={3} />
              <Tooltip />
              <Line
                dot={false}
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stocks;
