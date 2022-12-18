using AutoMapper;
using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Features.Products.Queries;
using Bettermart_Application.Responses;
using MediatR;

namespace Bettermart_Application.Features.Products.Handlers
{
    public class GetProductListHandler: IRequestHandler<GetProductListQuery, BaseResponse<List<GetProductDto>>>
    {
        private readonly IGenericRepository<Product> _repository;
        private readonly IMapper _mapper;

        public GetProductListHandler(IGenericRepository<Product> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;   
        }

        public async Task<BaseResponse<List<GetProductDto>>> Handle(GetProductListQuery request, CancellationToken cancellationToken)
        {
            var response = new BaseResponse<List<GetProductDto>>();
            var products = await _repository.FilterBy(filter => true);
            var mappedProducts = _mapper.Map<List<GetProductDto>>(products);
            
            response.Data = mappedProducts;
            response.Success = true;
            return response;
        }
    }
}
