﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Sailor.Application.Interface;
using Sailor.Infrastructure.Service.SCM;
using SailorApp.Domain.DTO.SCM;
using SailorApp.Domain.Entity.SCM;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace SailorAPI.Controllers
{
   // [Authorize]
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

        [HttpGet("GetPageWiseData/{pagenumber}/{pagesize}")]
        public async Task<IActionResult> GetPagination(int pagenumber, int pagesize,[FromQuery] tran_ScmPoEntity obj)
        {
            obj.pageNumber = pagenumber; 
            obj.pageSize = pagesize;

            var result = await _IFabricPoService.GetPagination(obj);
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
        public async Task<IActionResult> Add([FromBody] tran_ScmPoEntity item)
        {
            try
            {
                await _IFabricPoService.Add(item);
                if (item == null)
                {
                    return BadRequest("Invalid data.");
                }
                return Ok(new { message = "Item added successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }     
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
