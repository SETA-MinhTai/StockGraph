import React, { useEffect, useState } from "react";
import { fetchStocks, fetchReport } from "../services/api";
import "./HomePage.css";

import Chart from "../components/Chart";
import NavBar from "../components/NavBar";
import Report from "../components/Report";
import FilterBar from "../components/FilterBar";


export default function HomePage() {
    const [stocks, setStocks] = useState([]);
    const [report, setReport] = useState(null);
    const [showReport, setShowReport] = useState(false);

    useEffect(() => {
        loadReport();
    }, []);

    useEffect(() => {
        if (!showReport) {
            loadStocks();
        }
    }, [showReport]);

    const loadStocks = async (query = {}) => {
        try {
            const data = await fetchStocks(query);
            setStocks(data);
        } catch (error) {
            console.error("Error loading stocks:", error);
        }
    };

    const loadReport = async () => {
        try {
            const data = await fetchReport();
            setReport(data);
        } catch (error) {
            console.error("Error loading report:", error);
        }
    };

    const handleFilterChange = ({ startDate, startTime, endDate, endTime, minPrice, maxPrice, sortOption }) => {
        const query = {};

        if (startDate) {
            query.StartDate = `${startDate}T${startTime || "00:00"}`;
        }

        if (endDate) {
            query.EndDate = `${endDate}T${endTime || "23:59"}`;
        }

        if (minPrice) {
            query.MinPrice = minPrice;
        }

        if (maxPrice) {
            query.MaxPrice = maxPrice;
        }

        if (sortOption) {
            query.SortBy = sortOption;
        }

        loadStocks(query);
    };

    return (
        <div className="container">
            <NavBar showReport={showReport} setShowReport={setShowReport} />
            <div className="main-content">
                {showReport ? (
                    <Report report={report} />
                ) : (
                    <>
                        <Chart stocks={stocks} />
                        <FilterBar onFilterChange={handleFilterChange} />
                    </>
                )}
            </div>
        </div>
    );
};

