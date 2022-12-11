

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Bettermart.Domain.Entities
{
   public class Product 
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        [BsonElement("brand")]
        public string Brand { get; set; } = string.Empty;

        [BsonElement("category")]
        public string Category { get; set; } = string.Empty;

        [BsonElement("image")]
        public string Image { get; set; } = string.Empty;

        [BsonElement("price")]
        public float Price { get; set; }

        [BsonElement("stockCount")]
        public int StockCount { get; set; }

        [BsonElement("reviews")]
        public string[] Reviews { get; set; }

    }
}
