using Bettermart.Domain.Contracts;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Bettermart.Domain.Entities
{
    public abstract class Document: IDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public DateTime CreatedAt { get; } = DateTime.Now;
    }
}
