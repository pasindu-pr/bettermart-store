using Bettermart_Application.Contracts;
using MongoDB.Bson;

namespace Bettermart.Domain.Entities
{
    public abstract class Document: IDocument
    {
        public ObjectId Id { get; set; }
        public DateTime CreatedAt => Id.CreationTime;
    }
}
