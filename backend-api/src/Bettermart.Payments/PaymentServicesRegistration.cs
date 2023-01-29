using Bettermart.Payments.Services;
using Bettermart_Application.Contracts;
using Microsoft.Extensions.DependencyInjection;

namespace Bettermart.Payments
{
    public static class PaymentServicesRegistration
    {
        public static IServiceCollection ConfigureApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IPaymentService, PaymentService>();
            return services;
        }
    }
}
