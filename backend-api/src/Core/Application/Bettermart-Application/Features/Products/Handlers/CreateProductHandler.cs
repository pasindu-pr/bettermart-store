
using AutoMapper;
using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Features.Products.Commands;
using Bettermart_Application.Responses;
using MediatR;

namespace Bettermart_Application.Features.Products.Handlers
{
    public class CreateProductHandler : IRequestHandler<CreateProductCommand, BaseResponse<List<GetProductDto>>>
    {
        private readonly IGenericRepository<Product> _repository;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public CreateProductHandler(IGenericRepository<Product> repository, IMapper mapper, IMediator mediator)
        {
            _repository = repository;
            _mapper = mapper;   
            _mediator = mediator;
        } 

        public async Task<BaseResponse<List<GetProductDto>>> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseResponse<List<GetProductDto>>();
            var product = _mapper.Map<Product>(request.Product);
            _repository.InsertOneAsync(product);

            var products = await _repository.FilterBy(filter => true);
            var mappedProducts = _mapper.Map<List<GetProductDto>>(products);

            response.Data = mappedProducts;
            response.Success = true;
            return response;
        }
    }
}
