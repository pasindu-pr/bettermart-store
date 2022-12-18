using AutoMapper;
using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Features.Products.Queries;
using MediatR;

namespace Bettermart_Application.Features.Products.Handlers
{
    public class GetProductListHandler: IRequestHandler<GetProductListQuery, List<GetProductDto>>
    {
        private readonly IGenericRepository<Product> _repository;
        private readonly IMapper _mapper;

        public GetProductListHandler(IGenericRepository<Product> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;   
        }

        public async Task<List<GetProductDto>> Handle(GetProductListQuery request, CancellationToken cancellationToken)
        {
            var products = await _repository.FilterBy(filter => true);
            return _mapper.Map<List<GetProductDto>>(products);
        }
    }
}
