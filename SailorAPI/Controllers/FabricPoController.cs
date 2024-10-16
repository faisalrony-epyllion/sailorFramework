﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sailor.Application.Interface;
using SailorApp.Domain.Entity.SCM;

namespace SailorAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FabricPoController : ControllerBase
    {
        

        private readonly ILogger<FabricPoController> _logger;
        private IFabricPoService _IFabricPoService;
       

        public FabricPoController(ILogger<FabricPoController> logger, IFabricPoService FabricPo, IuserServicecs iuserServicecs)
        {
            _logger = logger;
            _IFabricPoService = FabricPo;
            
        }

 
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _IFabricPoService.GetAll();  
            return Ok(result);  
        }

        [HttpGet("GetById/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _IFabricPoService.GetById(id);

            if (result == null)
            {
                return NotFound(); 
            }

            return Ok(result); 
        }

        [HttpPost("Add")]
        public void Add(tran_ScmPoEntity obj)
        {
            _IFabricPoService.Add(obj);
        }

        [HttpPut("Update")]
        public void Update(tran_ScmPoEntity obj)
        {
            _IFabricPoService.Update(obj);
        }

        [HttpPut("Delete")]
        public void Delete(tran_ScmPoEntity obj)
        {
            _IFabricPoService.Delete(obj);
        }

 
    }
}
