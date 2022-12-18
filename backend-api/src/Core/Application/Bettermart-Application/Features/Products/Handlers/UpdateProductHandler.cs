using AutoMapper;
using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Features.Products.Commands;
using Bettermart_Application.Features.Products.Queries;
using Bettermart_Application.Responses;
using MediatR;

namespace Bettermart_Application.Features.Products.Handlers
{
    public class UpdateProductHandler: IRequestHandler<UpdateProductCommand, BaseResponse<GetProductDto>>
    {
        private readonly IGenericRepository<Product> _repository;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public UpdateProductHandler(IGenericRepository<Product> repository, IMapper mapper, IMediator mediator)
        {
            _repository = repository;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<BaseResponse<GetProductDto>> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseResponse<GetProductDto>();
            var productToUpdate = _mapper.Map<Product>(request.Product);
            await _repository.ReplaceOneAsync(productToUpdate);

            var updatedProduct = await _mediator.Send(new GetProductQuery { ProductId = productToUpdate.Id }); 
            return updatedProduct;
        }
    }
}
