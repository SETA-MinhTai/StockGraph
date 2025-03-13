const DataTable = ({ stocks }) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold">Stock Data Table</h2>
            <table className="min-w-full border-collapse border border-gray-300 mt-2">
            <thead>
                <tr className="bg-gray-200">
                <th className="border p-2">Date</th>
                <th className="border p-2">Market Price</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock, index) => (
                <tr key={index} className="text-center border-b">
                    <td className="border p-2">{new Date(stock.date).toLocaleString()}</td>
                    <td className="border p-2">${stock.marketPrice.toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default DataTable;