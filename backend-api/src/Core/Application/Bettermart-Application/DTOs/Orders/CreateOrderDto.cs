using MongoDB.Bson;

namespace Bettermart_Application.DTOs.Orders
{
    public class CreateOrderDto
    {
        public ObjectId[] products = new ObjectId[0];
    }
}
