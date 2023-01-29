using Bettermart_Application.DTOs.Orders;
using Bettermart_Application.Responses;
using MediatR;
using MongoDB.Bson;

namespace Bettermart_Application.Features.Orders.Commands
{
    public class CreateOrderCommand: IRequest<BaseResponse<GetOrderIdDto>>
    {
        public ObjectId[] products = new ObjectId[0];
    }
}
