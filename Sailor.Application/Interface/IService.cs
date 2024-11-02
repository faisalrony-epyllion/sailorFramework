namespace Sailor.Application.Interface
{
    public interface IService<T> where T : class
    {
        Task Add(T item);

        Task Update(T item);

        Task Delete(T item);
       
        Task<T> GetById(int id);
        Task <IEnumerable<T>> GetAll();
        Task<IEnumerable<T>> GetPagination(T item);

    }
}
