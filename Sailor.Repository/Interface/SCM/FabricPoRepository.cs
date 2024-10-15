using SailorApp.Domain.Entity.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sailor.Repository.Interface.SCM
{
    public interface IFabricPoRepository : IRepository<tran_ScmPoEntity>
    {
        public void Add(tran_ScmPoEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }


        public tran_ScmPoEntity GetById(int id)
        {
            throw new NotImplementedException();

        }


        public void Update(tran_ScmPoEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
