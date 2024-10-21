using Microsoft.Extensions.Logging;
using Sailor.Application.Interface;
using Sailor.Infrastructure.Service.SCM;
using Sailor.Repository.Implementation.SCM;
using Sailor.Repository.Implementation.USER;
using Sailor.Repository.Interface.SCM;
using Sailor.Repository.Interface.USER;
using SailorApp.Domain.DTO.SCM;
using SailorApp.Domain.Entity.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sailor.Infrastructure.Service.USER
{
    public class UserService:IUserServicecs
    {
        private IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }


        public async Task<owin_user_DTO> GetSingleAsync(owin_user_DTO username)
        {
            return await _userRepository.GetSingleAsync(username);
        }

    }
}
