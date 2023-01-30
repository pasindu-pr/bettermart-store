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
        private readonly IConfiguration _configuration;

        public PaymentsController(IPaymentService paymentService, IConfiguration configuration)
        {
            _paymentService = paymentService;
            _configuration = configuration;
        }

        [HttpPost("webhook")]
        public async Task<IActionResult> Webhook()
        {
            try
            {
                var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
                var enpointSecret = _configuration.GetValue<string>("Stripe:SigningSecret");
                var signatureHeader = Request.Headers["Stripe-Signature"];
                Event stripeEvent = EventUtility.ConstructEvent(json, signatureHeader, enpointSecret);
                if (stripeEvent.Type == Events.CheckoutSessionCompleted)
                {
                    
                    bool isPaymentUpdated = await _paymentService.SavePaymentInfo(stripeEvent);

                    if (isPaymentUpdated)
                    {
                        return Ok();
                    }else
                    {
                        return BadRequest();
                    }
                    
                }

                return BadRequest();
               
            }
            catch(StripeException e)
            {
                Console.WriteLine(e);
                return BadRequest();
            }

        }
    }
}
