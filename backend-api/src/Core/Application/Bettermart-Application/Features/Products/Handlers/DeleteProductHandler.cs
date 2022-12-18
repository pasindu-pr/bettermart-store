using AutoMapper;
using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Features.Products.Commands;
using Bettermart_Application.Responses;
using MediatR; 

namespace Bettermart_Application.Features.Products.Handlers
{
    public class DeleteProductHandler : IRequestHandler<DeleteProductCommand, BaseResponse<GetProductDto>>
    {
        private readonly IGenericRepository<Product> _repository;
        private readonly IMapper _mapper;

        public DeleteProductHandler(IGenericRepository<Product> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<BaseResponse<GetProductDto>> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseResponse<GetProductDto>();
            
            await _repository.DeleteByIdAsync(request.ProductId);

            response.Data = null;
            response.Success = true;
            response.Message = "Product Deleted Successfully";
            return response;
        }
    }
}
