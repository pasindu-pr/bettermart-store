using Bettermart_Application.Features.Orders.Commands;
using Bettermart_Application.Responses;
using MediatR; 
using Microsoft.AspNetCore.Mvc;

namespace Bettermart.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrderController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<BaseResponse<String>> CreateOrder(String[] productIds)
        {
            var response = await _mediator.Send(new CreateOrderCommand { products = productIds });
            return response;
        }
    }
}
