using System.Globalization;
using StockGraph.Models;

namespace StockGraph.Services
{
    public class StockService
    {
        private readonly string _dataFilePath = "stockData.csv";

        private readonly List<Stock> _stockList;

        public StockService()
        {
            _stockList = LoadData();
        }

        private List<Stock> LoadData()
        {
            if (!File.Exists(_dataFilePath))
                throw new FileNotFoundException("Data file not found.");

            List<Stock> stockList = new List<Stock>();
            string[] lines = File.ReadAllLines(_dataFilePath);

            foreach (string line in lines.Skip(1))
            {
                var columns = line.Split(',');

                if (columns.Length < 2) continue;

                if (DateTime.TryParseExact(columns[0],
                    ["dd/MM/yyyy HH:mm", "dd/MM/yyyy"],
                    CultureInfo.InvariantCulture,
                    DateTimeStyles.None,
                    out DateTime date) &&
                    decimal.TryParse(columns[1], NumberStyles.Any, CultureInfo.InvariantCulture, out decimal price))
                {
                    stockList.Add(new Stock { Date = date, MarketPrice = price });
                }
            }

            return stockList;
        }

        public List<Stock> GetStocks(StockQuery query)
        {
            var filteredStocks = _stockList.AsQueryable();

            if (query.StartDate.HasValue)
            {
                filteredStocks = filteredStocks.Where(s => s.Date >= query.StartDate.Value);
            }

            if (query.EndDate.HasValue)
            {
                filteredStocks = filteredStocks.Where(s => s.Date <= query.EndDate.Value);
            }

            if (query.MinPrice.HasValue)
            {
                filteredStocks = filteredStocks.Where(s => s.MarketPrice >= query.MinPrice.Value);
            }

            if (query.MaxPrice.HasValue)
            {
                filteredStocks = filteredStocks.Where(s => s.MarketPrice <= query.MaxPrice.Value);
            }

            if (!string.IsNullOrEmpty(query.SortBy))
            {
                if (query.SortBy == "date")
                {
                    filteredStocks = filteredStocks.OrderBy(s => s.Date);
                }
                else if (query.SortBy == "price")
                {
                    filteredStocks = filteredStocks.OrderBy(s => s.MarketPrice);
                }
            }

            return filteredStocks.ToList();
        }

        public StockReport? GetStockReport()
        {
            if (_stockList.Count < 2)
                return null;

            decimal minPrice = _stockList.Min(s => s.MarketPrice);
            decimal maxPrice = _stockList.Max(s => s.MarketPrice);
            decimal averagePrice = _stockList.Average(s => s.MarketPrice);

            // Calculate the most expensive hour window
            DateTime expensiveHourStart = DateTime.MinValue;
            decimal expensiveHourTotal = 0;

            for (int i = 0; i < _stockList.Count - 1; i++)
            {
                var first = _stockList[i];
                var second = _stockList[i + 1];

                decimal windowSum = first.MarketPrice + second.MarketPrice;

                if (windowSum > expensiveHourTotal)
                {
                    expensiveHourTotal = windowSum;
                    expensiveHourStart = first.Date;
                }
            }

            return new StockReport
            {
                MinPrice = minPrice,
                MaxPrice = maxPrice,
                AveragePrice = averagePrice,
                ExpensiveHourStart = expensiveHourStart,
                ExpensiveHourTotal = expensiveHourTotal
            };
        }
    }
}
