using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Responses;
using MediatR;

namespace Bettermart_Application.Features.Products.Commands
{
    public class DeleteProductCommand: IRequest<BaseResponse<GetProductDto>>
    {
        public string ProductId { get; set; } = string.Empty;
    }
}
