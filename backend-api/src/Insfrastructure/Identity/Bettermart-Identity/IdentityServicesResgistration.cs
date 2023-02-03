using Bettermart_Identity.Contracts;
using Bettermart_Identity.Services;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

namespace Bettermart_Identity
{
    public static class IdentityServicesResgistration
    {
        public static IServiceCollection ConfigureIdentityServices(this IServiceCollection services, IConfiguration configuration)
        {

            Dictionary<string, object> settings = configuration.GetSection("FirebaseAdminCredentials").Get<Dictionary<string, object>>();
            string firebaseAdminCredentialsJson = JsonConvert.SerializeObject(settings);

            services.AddSingleton(FirebaseApp.Create(new AppOptions()
            {
                Credential = GoogleCredential.FromJson(firebaseAdminCredentialsJson),
            }
            ));

            services
               .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddScheme<AuthenticationSchemeOptions, Handlers.FirebaseAuthenticationHandler>(JwtBearerDefaults.AuthenticationScheme, (o) => { });


            services.AddAuthorization(options =>
            {
                options.AddPolicy("admin", policy => policy.RequireClaim("admin"));
            });

            services.AddSingleton<IAdminUserService, AdminUserService>();
            return services;

        }
    }
}
