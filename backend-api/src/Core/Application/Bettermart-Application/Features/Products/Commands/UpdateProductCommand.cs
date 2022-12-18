using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Responses;
using MediatR; 

namespace Bettermart_Application.Features.Products.Commands
{
    public class UpdateProductCommand: IRequest<BaseResponse<GetProductDto>>
    {
        public UpdateProductDto Product;
    }
}
