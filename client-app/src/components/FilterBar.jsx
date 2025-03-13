import React, { useState } from "react";
import "./FilterBar.css";

const FilterBar = ({ onFilterChange }) => {
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [sortOption, setSortOption] = useState("date");

    const handleFilterChange = () => {
        onFilterChange({ startDate, startTime, endDate, endTime, minPrice, maxPrice, sortOption });
    };

    return (
        <div className="filter-bar">
            <div className="filter-item">
                <label htmlFor="start-date">Start Date:</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="time"
                    id="start-time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div className="filter-item">
                <label htmlFor="end-date">End Date:</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <input
                    type="time"
                    id="end-time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
            </div>
            <div className="filter-item">
                <label htmlFor="min-price">Min Price:</label>
                <input
                    type="number"
                    id="min-price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            </div>
            <div className="filter-item">
                <label htmlFor="max-price">Max Price:</label>
                <input
                    type="number"
                    id="max-price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <div className="filter-item">
                <label htmlFor="sort-option">Sort By:</label>
                <select
                    id="sort-option"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="date">Date</option>
                    <option value="price">Price</option>
                </select>
            </div>
            <button className="filter-button" onClick={handleFilterChange}>
                Apply Filters
            </button>
        </div>
    );
};

export default FilterBar;