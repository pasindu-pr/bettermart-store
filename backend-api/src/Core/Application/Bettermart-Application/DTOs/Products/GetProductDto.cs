
using MongoDB.Bson;

namespace Bettermart_Application.DTOs.Products
{
    public class GetProductDto
    {
        public string? Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty; 
        public string Brand { get; set; } = string.Empty;  
        public string Category { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string[] Image { get; set; } = Array.Empty<string>();
        public float Price { get; set; }
        public int StockCount { get; set; }
        public string[]? Reviews { get; set; }
        public DateTime? CreatedAt { get; }
    }
}
