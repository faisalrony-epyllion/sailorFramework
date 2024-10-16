using SailorApp.Domain.Entity.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sailor.Application.Interface
{
    public interface IFabricPoService:IService<tran_ScmPoEntity>
    {
        void Add(tran_ScmPoEntity item);
        void Update(tran_ScmPoEntity item);
        void Delete(tran_ScmPoEntity item);
        tran_ScmPoEntity GetById(int id);
        Task<IEnumerable<tran_ScmPoEntity>> GetAll();
    }
}
