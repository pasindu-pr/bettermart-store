using AutoMapper;
using Bettermart.Payments.Entities;
using Bettermart_Application.Contracts;
using Bettermart_Application.DTOs.Orders;
using Bettermart_Application.Features.Orders.Commands;
using Bettermart_Application.Responses;
using MediatR;
using MongoDB.Bson;

namespace Bettermart_Application.Features.Orders.Handlers
{
    public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, BaseResponse<GetOrderIdDto>>
    {
        private readonly IGenericRepository<Order> _repository;
        private readonly IMapper _mapper;

        public CreateOrderHandler(IGenericRepository<Order> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<BaseResponse<GetOrderIdDto>> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseResponse<GetOrderIdDto>();
            Order order = new Order();
            order.Products = request.products;

            ObjectId id =  await _repository.InsertOneAsync(order);
            response.Data = _mapper.Map<GetOrderIdDto>(id.ToString());
            response.Success = true;
            return response;
        }
    }
}
