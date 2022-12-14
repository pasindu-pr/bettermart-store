using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; 

namespace Bettermart_Application.Contracts
{
    public interface IDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.String)]
        ObjectId Id { get; set; }

        DateTime CreatedAt { get; }
    }
}
