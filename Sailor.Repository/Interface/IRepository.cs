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
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<IEnumerable<T>> GetAll();
       Task<T> GetById(int id);

    }
}
