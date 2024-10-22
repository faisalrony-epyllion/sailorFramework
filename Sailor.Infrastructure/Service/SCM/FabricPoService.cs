using Sailor.Application.Interface;
using Sailor.Repository.Interface.SCM;
using SailorApp.Domain.Entity.SCM;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Threading.Tasks;
using Sailor.Repository.Interface;
using SailorApp.Domain.Entity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SailorApp.Domain.DTO.SCM;
using SailorApp.Domain.DTO.DTParameter;

namespace Sailor.Infrastructure.Service.SCM
{
    public class FabricPoService : IFabricPoService
    {
        private IFabricPoRepository _fabricPoRepository;
       

        public FabricPoService(IFabricPoRepository fabricPoRepository)
        {
            _fabricPoRepository = fabricPoRepository;
            
        }

       
        public async Task Add(tran_ScmPoEntity item)
        {
            item.po_details = JArray.Parse(JsonConvert.SerializeObject(item.List_po_details)).ToString();
            await _fabricPoRepository.Add(item);
        }

        public async Task<tran_ScmPoEntity> GetById(int id)
        {
            return await _fabricPoRepository.GetById(id);  
        }

        public async Task<IEnumerable<tran_ScmPoEntity>> GetAll()
        {
            return await _fabricPoRepository.GetAll(); 
        }

        public async Task<List<tran_scm_po_DTO>> GetAllFabricsPoAsync(DtParameters obj)
        {
            return await _fabricPoRepository.GetAllFabricsPoAsync(obj);
        }

        public async Task Update(tran_ScmPoEntity item)
        {
           _fabricPoRepository.Update(item);
        }

        public async Task Delete(tran_ScmPoEntity item)
        {
            _fabricPoRepository.Delete(item);

        }

        public async Task<IEnumerable<tran_ScmPoEntity>> GetPagination(tran_ScmPoEntity obj)
        {
            return await _fabricPoRepository.GetPagination(obj);
        }

    }
}
