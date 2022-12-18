using Bettermart_Application.DTOs.Products;
using Bettermart_Application.Features.Products.Queries;
using MediatR; 
using Microsoft.AspNetCore.Mvc;

namespace Bettermart.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProductController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<List<GetProductDto>> GetProducts()
        {
            var products = await _mediator.Send(new GetProductListQuery());
            return products;
        }


        //[HttpPost]
        //public async Task AddPerson(string name, string brand, string category, string image, float price, int stockcount)
        //{
        //    var person = new Product()
        //    {
        //       Name = name,
        //       Brand = brand,
        //       Category = category,
        //       Image = image,
        //       Price = price,
        //       StockCount = stockcount
        //    };

        //    await _productsRepository.InsertOneAsync(person);
        //}
    }
}
