using Bettermart.Payments.Entities;
using Bettermart_Application.Contracts; 
using Bettermart_Application.Features.Orders.Commands;
using Bettermart_Application.Responses;
using MediatR;
using MongoDB.Bson;

namespace Bettermart_Application.Features.Orders.Handlers
{
    public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, BaseResponse<String>>
    {
        private readonly IGenericRepository<Order> _repository; 

        public CreateOrderHandler(IGenericRepository<Order> repository)
        {
            _repository = repository; 
        }

        public async Task<BaseResponse<String>> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseResponse<String>();
            Order order = new Order();
            order.Products = request.products.Select(product => ObjectId.Parse(product)).ToArray();

            ObjectId id =  await _repository.InsertOneAsync(order);
            response.Data = id.ToString();
            response.Success = true;
            return response;
        }
    }
}
