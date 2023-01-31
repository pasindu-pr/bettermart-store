using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace Bettermart_Identity
{
    public static class IdentityServicesResgistration
    {
        public static IServiceCollection ConfigureIdentityServices(this IServiceCollection services, IConfiguration configuration)
        {
            var appId = configuration.GetValue<string>("FirebaseAuthentication:AppId");

            services
               .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options =>
                   {
                       options.Authority = $"https://securetoken.google.com/{appId}";
                       options.TokenValidationParameters = new TokenValidationParameters
                       {
                           ValidateIssuer = true,
                           ValidIssuer = $"https://securetoken.google.com/{appId}",
                           ValidateAudience = true,
                           ValidAudience = appId,
                           ValidateLifetime = true
                       };
                   });


            return services;

        }
    }
}
