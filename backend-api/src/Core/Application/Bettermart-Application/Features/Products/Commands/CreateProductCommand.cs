using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Responses;
using MediatR; 

namespace Bettermart_Application.Features.Products.Commands
{
    public class CreateProductCommand: IRequest<BaseResponse<List<GetProductDto>>>
    {
        public CreateProductDto Product { get; set; }
    }
}
