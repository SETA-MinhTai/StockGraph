import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import "./Chart.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Chart = ({ stocks }) => {
    // Format data
    const data = {
        labels: stocks.map(stock => {
            const date = new Date(stock.date);
            const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            return `${formattedDate} ${formattedTime}`;
        }),
        datasets: [
            {
                label: "Stock",
                data: stocks.map(stock => stock.marketPrice),
                borderColor: "#4CAF50",
                backgroundColor: "rgba(76, 175, 80, 0.2)",
                borderWidth: 2,
                pointRadius: 3,
            }
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    color: "#c4f2f2",
                },
            },
            tooltip: {
                titleColor: "#c4f2f2", 
                bodyColor: "#c4f2f2", 
            },
        },
        scales: {
            x: {
                ticks: { color: "#c4f2f2", autoSkip: true, maxTicksLimit: 10 },
                title: { color: "#c4f2f2", display: false, text: "Date & Time" },
            },
            y: {
                ticks: { color: "#c4f2f2", autoSkip: true, maxTicksLimit: 10 },
                title: { color: "#c4f2f2", display: true, text: "Market Price" },
                beginAtZero: false,
            },
        },
    };

    return (
        <div className="chart">
            <h2>Stock Market Price Chart</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default Chart;
