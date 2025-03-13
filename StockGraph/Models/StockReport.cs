namespace StockGraph.Models
{
    public class StockReport
    {
        public decimal MinPrice { get; set; }
        public decimal MaxPrice { get; set; }
        public decimal AveragePrice { get; set; }
        public DateTime ExpensiveHourStart { get; set; }
        public decimal ExpensiveHourTotal { get; set; }
    }
}
