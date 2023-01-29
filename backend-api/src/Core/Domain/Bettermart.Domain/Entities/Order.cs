using Bettermart.Domain.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Bettermart.Payments.Entities
{
    [BsonCollection("orders")]
    public class Order: Document
    {
        [BsonElement("paymentStatus")]
        public Boolean PaymentStatus { get; set; }

        [BsonElement("paymentId")]
        public String PaymentId { get; set; } = String.Empty;

        [BsonElement("products")]
        public ObjectId[] Products { get; set; } = new ObjectId[0];

        [BsonElement("shipping")]
        public Shipping shipping { get; set; } = new Shipping();
    }
}
