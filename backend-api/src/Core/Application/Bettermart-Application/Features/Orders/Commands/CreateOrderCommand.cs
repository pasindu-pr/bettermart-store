using Bettermart_Application.Responses;
using MediatR;
using MongoDB.Bson;

namespace Bettermart_Application.Features.Orders.Commands
{
    public class CreateOrderCommand: IRequest<BaseResponse<String>>
    {
        public String[] products;
    }
}
