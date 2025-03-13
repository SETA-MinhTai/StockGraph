using Microsoft.AspNetCore.Mvc;
using StockGraph.Models;
using StockGraph.Services;

namespace StockGraph.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockGraphController : ControllerBase
    {
        private readonly StockService _stockService;

        public StockGraphController(StockService stockService)
        {
            _stockService = stockService;
        }

        [HttpGet]
        public ActionResult<List<Stock>> GetStocks([FromQuery]StockQuery query)
        {
            List<Stock> stocks = _stockService.GetStocks(query);
            return Ok(stocks);
        }

        [HttpGet("report")]
        public ActionResult<StockReport> GetStockReport()
        {
            StockReport? report = _stockService.GetStockReport();

            if (report == null)
                return NotFound("No stock report available.");

            return Ok(report);
        }
    }
}
