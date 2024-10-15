using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sailor.Application.Interface;
using SailorApp.Domain.Entity.SCM;

namespace SailorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FabricPoController : ControllerBase
    {
        

        private readonly ILogger<FabricPoController> _logger;
        private IFabricPoService _IFabricPoService;

        public FabricPoController(ILogger<FabricPoController> logger, IFabricPoService FabricPo)
        {
            _logger = logger;
            _IFabricPoService = FabricPo;
        }

        [HttpGet]       
        public tran_ScmPoEntity GetById(int id)
        {
           return _IFabricPoService.GetById(id);
        }

        [HttpGet] 
        public IEnumerable<tran_ScmPoEntity> GetAll()
        {
            return _IFabricPoService.GetAll();
        }

        [HttpPost]       
        public void Add(tran_ScmPoEntity obj)
        {
            _IFabricPoService.Add(obj);
        }

        [HttpPut]   
        public void Update(tran_ScmPoEntity obj)
        {
            _IFabricPoService.Update(obj);
        }

        [HttpPut]        
        public void Delete(tran_ScmPoEntity obj)
        {
            _IFabricPoService.Delete(obj);
        }
    }
}
