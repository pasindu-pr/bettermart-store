namespace Bettermart_Application.Contracts
{
    public interface IGenericRepository<T> where T : class
    {
        public Task<T> Get();
        public Task<IReadOnlyList<T>> GetAll();

        public Task<T> Add(T entity);

        public Task Delete(T entity);

        public Task Update(T entity);
    }
}
