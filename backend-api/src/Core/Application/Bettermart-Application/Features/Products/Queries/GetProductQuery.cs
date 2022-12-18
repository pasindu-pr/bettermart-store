using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Responses;
using MediatR;

namespace Bettermart_Application.Features.Products.Queries
{
    public class GetProductQuery: IRequest<BaseResponse<GetProductDto>>
    {
        public string ProductId { get; set; } = string.Empty; 
    }
}
