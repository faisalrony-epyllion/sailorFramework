using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sailor.Repository.Interface
{
    public interface IRepository<T> where T : class
    {
        T Get(int id);
        Task Add(T entity);
        Task Update(T entity);
        Task Delete(T entity);
        Task<IEnumerable<T>> GetAll();
       Task<T> GetById(int id);
       Task<IEnumerable<T>> GetPagination(T item);

    }
}
