using AspNetCore.Firebase.Authentication.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Bettermart_Identity
{
    public static class IdentityServicesResgistration
    {
        public static IServiceCollection ConfigureIdentityServices(this IServiceCollection services, IConfiguration configuration)
        {
            string issuer = configuration.GetValue<string>("FirebaseAuthentication:Issuer");
            string audience = configuration.GetValue<string>("FirebaseAuthentication:Audience");
            services.AddFirebaseAuthentication(issuer, audience);
            return services;
        }
    }
}
