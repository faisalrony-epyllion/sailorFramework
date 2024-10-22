using SailorApp.Domain.DTO.DTParameter;
using SailorApp.Domain.DTO.SCM;
using SailorApp.Domain.Entity.SCM;

namespace Sailor.Application.Interface
{
    public interface IFabricPoService:IService<tran_ScmPoEntity>
    {
        Task<List<tran_scm_po_DTO>> GetAllFabricsPoAsync(DtParameters obj);

    }
}
