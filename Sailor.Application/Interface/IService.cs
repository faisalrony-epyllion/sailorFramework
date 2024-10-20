using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using SailorApp.Domain.Entity.SCM;

namespace Sailor.Application.Interface
{
    public interface IService<T> 
    {
        Task Add(T item);

        Task Update(T item);

        Task Delete(T item);
       
        Task<T> GetById(int id);
        Task <IEnumerable<T>> GetAll();
        Task<IEnumerable<T>> GetPagination(T item);

    }
}
