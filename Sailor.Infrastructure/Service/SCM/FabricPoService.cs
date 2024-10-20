using Sailor.Application.Interface;
using Sailor.Repository.Interface.SCM;
using SailorApp.Domain.Entity.SCM;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Threading.Tasks;
using Sailor.Repository.Interface;
using SailorApp.Domain.Entity;

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

        public async Task<tran_ScmPoEntity> GetById(int id)
        {
            return await _fabricPoRepository.GetById(id);  
        }

        public async Task<IEnumerable<tran_ScmPoEntity>> GetAll()
        {
            return await _fabricPoRepository.GetAll(); 
        }

        public void Update(tran_ScmPoEntity item)
        {
           _fabricPoRepository.Update(item);
        }

        public void Delete(tran_ScmPoEntity item)
        {
            _fabricPoRepository.Delete(item);

        }

        public async Task<IEnumerable<tran_ScmPoEntity>> GetPagination(tran_ScmPoEntity obj)
        {
            return await _fabricPoRepository.GetPagination(obj);
        }

    }
}
