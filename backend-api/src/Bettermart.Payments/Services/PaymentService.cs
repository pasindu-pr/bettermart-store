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

        public async Task<bool> SavePaymentInfo(Event stripeEvent)
        {
            var paymentInfomation = stripeEvent.Data.Object as Stripe.Checkout.Session;
            String OrderId = paymentInfomation.Metadata["orderId"];
            var shippingDetails = paymentInfomation.ShippingDetails.Address;


            Entities.Shipping shippingAddress = new Entities.Shipping
            {
                AddressLine1 = shippingDetails.Line1,
                AddressLine2 = shippingDetails.Line2,
                ShippingCity = shippingDetails.City,
                Country = shippingDetails.Country,
                State = shippingDetails.State,
                ZipCode = shippingDetails.PostalCode
            };


            Order order = await _repository.FindByIdAsync(OrderId);
            order.PaymentStatus = true;
            order.PaymentId = paymentInfomation.Id;
            order.shipping = shippingaddress;

            await _repository.ReplaceOneAsync(order);
            return true;
        }
    }
}
