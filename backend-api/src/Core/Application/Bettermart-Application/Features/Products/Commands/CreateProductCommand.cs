using Bettermart_Application.DTOs.Products;
using MediatR; 

namespace Bettermart_Application.Features.Products.Commands
{
    public class CreateProductCommand: IRequest<List<GetProductDto>>
    {
        public CreateProductDto Product { get; set; }
    }
}
