using Bettermart_Application.DTOs.Products;
using MediatR;

namespace Bettermart_Application.Features.Products.Queries
{
    public class GetProductListQuery: IRequest<List<GetProductDto>>
    {
    }
}
