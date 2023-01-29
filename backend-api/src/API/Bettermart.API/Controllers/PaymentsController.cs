using Bettermart_Application.Contracts;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace Bettermart.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentService _paymentService;

        public PaymentsController(IPaymentService paymentService)
        {
            _paymentService = paymentService;
        }

        [HttpPost("webhook")]
        public async Task<IActionResult> Webhook()
        {
            try
            {
                var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
                var enpointSecret = "whsec_55e1a53d9b17cf09245ddfdc18390c710c4ca0a31fd1d88fe27540c2111b8c86";
                var signatureHeader = Request.Headers["Stripe-Signature"];
                Event stripeEvent = EventUtility.ConstructEvent(json, signatureHeader, enpointSecret);

                _paymentService.SavePaymentInfo(stripeEvent);

                return Ok();
            }
            catch(StripeException e)
            {
                Console.WriteLine(e);
                return BadRequest();
            }

        }
    }
}
