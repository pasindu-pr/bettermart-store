using Stripe;

namespace Bettermart_Application.Contracts
{
    public interface IPaymentService
    {
        public void SavePaymentInfo(Event stripeEvent);
    }
}
