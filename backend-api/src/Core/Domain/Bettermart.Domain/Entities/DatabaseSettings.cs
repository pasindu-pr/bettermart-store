using Bettermart_Application.Contracts;

namespace Bettermart.Domain.Entities
{
    public class DatabaseSettings: IDatabaseSettings
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;


    }
}
