using Microsoft.Extensions.Logging;
using Sailor.Application.Interface;
using Sailor.Infrastructure.Service.SCM;
using Sailor.Repository.Implementation.SCM;
using Sailor.Repository.Implementation.USER;
using Sailor.Repository.Interface.SCM;
using SailorApp.Domain.DTO.SCM;
using SailorApp.Domain.Entity.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sailor.Infrastructure.Service.USER
{
    public class UserService:IuserServicecs
    {
        UserRepository _user;// new UserRepository();

        public UserService(UserRepository user)
        {
            _user=user;
        }


        public async Task<owin_user_DTO> GetSingleAsync(owin_user_DTO username)
        {
            return await _user.GetSingleAsync(username);
        }

    }
}
