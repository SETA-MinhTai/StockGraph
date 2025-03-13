import React from "react";
import PropTypes from "prop-types";
import "./Report.css";

const Report = ({ report }) => {
    if (!report) {
        return <div className="report">No report data available.</div>;
    }

    const {
        minPrice,
        maxPrice,
        averagePrice,
        expensiveHourStart,
        expensiveHourTotal,
    } = report;

    const formattedExpensiveHourStart = new Date(expensiveHourStart).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className="report">
            <h2>Stock Price Report</h2>
            <div className="report-item">
                <span className="report-label">Minimum Price:</span>
                <span className="report-value">${minPrice.toFixed(2)}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Maximum Price:</span>
                <span className="report-value">${maxPrice.toFixed(2)}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Average Price:</span>
                <span className="report-value">${averagePrice.toFixed(2)}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Most Expensive Hour Start:</span>
                <span className="report-value">{formattedExpensiveHourStart}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Total Price During Most Expensive Hour:</span>
                <span className="report-value">${expensiveHourTotal.toFixed(2)}</span>
            </div>
        </div>
    );
};

Report.propTypes = {
    report: PropTypes.shape({
        minPrice: PropTypes.number.isRequired,
        maxPrice: PropTypes.number.isRequired,
        averagePrice: PropTypes.number.isRequired,
        expensiveHourStart: PropTypes.string.isRequired,
        expensiveHourTotal: PropTypes.number.isRequired,
    }),
};

export default Report;