using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; 

namespace Bettermart.Domain.Contracts
{
    public interface IDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public DateTime CreatedAt { get; }
    }
}
