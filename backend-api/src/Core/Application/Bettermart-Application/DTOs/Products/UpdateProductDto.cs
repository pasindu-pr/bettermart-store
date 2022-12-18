using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bettermart_Application.DTOs.Products
{
    public class UpdateProductDto
    {
        public string? Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Brand { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public float Price { get; set; }
        public int StockCount { get; set; }
    }
}
