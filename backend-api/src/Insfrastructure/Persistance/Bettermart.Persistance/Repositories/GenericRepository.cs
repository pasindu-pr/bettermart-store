using Bettermart.Domain.Entities;
using Bettermart_Application.Contracts;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Bettermart.Persistance.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly IMongoCollection<T> _collection;

        public GenericRepository(IOptions<BettermartDatabase> databasesettings)
        {
            var mongoClient = new MongoClient(databasesettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(databasesettings.Value.DatabaseName);
            _collection = (IMongoCollection<T>?)mongoDatabase.GetCollection<Product>(databasesettings.Value.CollectionsNames[0]);
        }

        public Task<T> Add(T entity)
        {
            throw new NotImplementedException();
        }

        public Task Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public Task<T> Get()
        {
            throw new NotImplementedException();
        }

        public Task<IReadOnlyList<T>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
