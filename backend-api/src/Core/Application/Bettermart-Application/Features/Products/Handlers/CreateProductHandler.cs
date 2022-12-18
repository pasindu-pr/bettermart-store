
using AutoMapper;
using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Features.Products.Commands;
using MediatR;

namespace Bettermart_Application.Features.Products.Handlers
{
    public class CreateProductHandler : IRequestHandler<CreateProductCommand, List<GetProductDto>>
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

        public async Task<List<GetProductDto>> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var product = _mapper.Map<Product>(request.Product);
            await _repository.InsertOneAsync(product);

            var products = await _repository.FilterBy(filter => true);
            return _mapper.Map<List<GetProductDto>>(products);
        }
    }
}
