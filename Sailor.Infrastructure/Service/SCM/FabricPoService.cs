using Sailor.Application.Interface;
using Sailor.Repository.Interface;
using Sailor.Repository.Interface.SCM;
using SailorApp.Domain.Entity.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sailor.Infrastructure.Service.SCM
{
    public class FabricPoService : IFabricPoService
    {
        private IFabricPoRepository _fabricPoRepository;

        public FabricPoService(IFabricPoRepository fabricPoRepository)
        {
            _fabricPoRepository = fabricPoRepository;
        }

        public void Add(tran_ScmPoEntity item)
        {
            _fabricPoRepository.Add(item);
        }

        public tran_ScmPoEntity GetById(int id)
        {
           return _fabricPoRepository.GetById(id);
        }

        public IEnumerable<tran_ScmPoEntity> GetAll()
        {
            return _fabricPoRepository.GetAll();
        }

        public void Update(tran_ScmPoEntity item)
        {
           _fabricPoRepository.Update(item);
        }

        public void Delete(tran_ScmPoEntity item)
        {
            _fabricPoRepository.Delete(item);

        }
    }
}
