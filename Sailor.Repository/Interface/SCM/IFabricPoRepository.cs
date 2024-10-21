using SailorApp.Domain.DTO.SCM;
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
        Task<List<tran_scm_po_DTO>> GetAllFabricsPoAsync(tran_scm_po_DTO obj);
    }
}
