using Bettermart.Domain.Contracts;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Bettermart.Domain.Entities
{
   [BsonCollection("products")]
   public class Product : Document
    {
        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        [BsonElement("brand")]
        public string Brand { get; set; } = string.Empty;

        [BsonElement("category")]
        public string Category { get; set; } = string.Empty;

        [BsonElement("image")]
        public string[] Images { get; set; } = Array.Empty<string>();

        [BsonElement("price")]
        public float Price { get; set; }

        [BsonElement("stockCount")]
        public int StockCount { get; set; }

        [BsonElement("reviews")]
        public string[]? Reviews { get; set; }
       
    }
}
