using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SailorAPI.Utils
{
    public class GenerateToken
    {
        private readonly IConfiguration _configuration;
       
        public GenerateToken(IConfiguration configuration)
        {
            _configuration = configuration;
           
        }
        public string GenerateJwtToken(string userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            // var key = Encoding.UTF8.GetBytes("yourVeryStrongSecretKeyThatIsAtLeast32CharactersLong");

            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];
            var key = Encoding.ASCII.GetBytes
            (_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", userId) }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials  (new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha512Signature),
                Issuer = issuer,
                Audience = audience,


            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

      

    }
}
