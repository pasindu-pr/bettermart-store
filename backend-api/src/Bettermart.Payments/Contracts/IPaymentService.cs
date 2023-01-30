using Stripe;

namespace Bettermart_Application.Contracts
{
    public interface IPaymentService
    {
        public Task<bool> SavePaymentInfo(Event stripeEvent);
    }
}
