using AutoMapper;
using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Features.Products.Queries;
using Bettermart_Application.Responses;
using MediatR; 

namespace Bettermart_Application.Features.Products.Handlers
{
    public class GetProductHandler : IRequestHandler<GetProductQuery, BaseResponse<GetProductDto>>
    {
        private readonly IGenericRepository<Product> _repository;
        private readonly IMapper _mapper;

        public GetProductHandler(IGenericRepository<Product> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<BaseResponse<GetProductDto>> Handle(GetProductQuery request, CancellationToken cancellationToken)
        {
            var response = new BaseResponse<GetProductDto>();
            var product = await _repository.FindByIdAsync(request.ProductId);
            var mappedProduct = _mapper.Map<GetProductDto>(product);
            
            response.Data = mappedProduct;
            response.Success = true;
            return response;
        }
    }
}
