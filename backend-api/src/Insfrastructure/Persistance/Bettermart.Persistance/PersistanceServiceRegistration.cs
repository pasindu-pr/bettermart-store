using Bettermart.Persistance.Repositories;
using Bettermart_Application.Contracts;
using Microsoft.Extensions.DependencyInjection;

namespace Bettermart.Persistance
{
    public static class PersistanceServiceRegistration
    {
        public static IServiceCollection ConfigurePersistanceServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            return services;
        }
    }
}
