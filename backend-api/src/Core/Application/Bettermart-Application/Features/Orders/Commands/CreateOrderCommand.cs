using Bettermart_Application.Responses;
using MediatR; 

namespace Bettermart_Application.Features.Orders.Commands
{
    public class CreateOrderCommand: IRequest<BaseResponse<String>>
    {
        public String[] products = new string[0];
    }
}
