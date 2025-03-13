import axios from "axios";

const BASE_URL = "http://localhost:7261/api/stock";

export const fetchStocks = async (query = {}) => {
    try {
        const response = await axios.get(BASE_URL, { params: query });
        return response.data || [];
    } catch (error) {
        console.error("Error fetching stock data:", error);
        throw error;
    }
};

export const fetchReport = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/report`);
        return response.data;
    } catch (error) {
        console.error("Error fetching report data:", error);
        throw error;
    }
};