using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bettermart.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IGenericRepository<Product> _productsRepository;

        public ProductController(IGenericRepository<Product> productsRepository)
        {
            _productsRepository = productsRepository;
        }


        [HttpPost("createProduct")]
        public async Task AddPerson(string name, string brand, string category, string image, float price, int stockcount)
        {
            var person = new Product()
            {
               Name = name,
               Brand = brand,
               Category = category,
               Image = image,
               Price = price,
               StockCount = stockcount
            };

            await _productsRepository.InsertOneAsync(person);
        }
    }
}
