using SailorApp.Domain.DTO.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sailor.Repository.Interface.USER
{
    public interface IUserRepository
    {
        Task<owin_user_DTO> GetSingleAsync(owin_user_DTO username);
    }
}
