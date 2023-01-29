using Bettermart.Payments.Entities;
using Bettermart_Application.Contracts;
using Stripe;

namespace Bettermart.Payments.Services { 
    public class PaymentService: IPaymentService
    {
        private readonly IGenericRepository<Order> _repository;

        public PaymentService(IGenericRepository<Order> repository)
        {
            _repository = repository;
        }

        public void SavePaymentInfo(Event stripeEvent)
        {
            return;
        }
    }
}
