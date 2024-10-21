using Microsoft.AspNetCore.Mvc;
using Sailor.Application.Interface;
using SailorAPI.Utils;
using SailorApp.Domain.DTO.SCM;

namespace SailorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly ILogger<AuthenticationController> _logger;
        private IUserServicecs _userServicecs;
        private readonly GenerateToken _generateToken;
        public AuthenticationController(ILogger<AuthenticationController> logger, IUserServicecs iuserServicecs, GenerateToken generateToken)
        {
            _logger = logger;
            _userServicecs = iuserServicecs;
            _generateToken = generateToken;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(owin_user_DTO model)
        {
            
           
             var result = await _userServicecs.GetSingleAsync(model);

            if (result == null)
                return Unauthorized();

          
             var token = _generateToken.GenerateJwtToken(result.user_name);

            

            return Ok(new { token });
        }

        



    }

}
