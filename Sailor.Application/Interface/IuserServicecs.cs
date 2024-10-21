using SailorApp.Domain.DTO.SCM;

namespace Sailor.Application.Interface
{
    public interface IUserServicecs
    {
        Task<owin_user_DTO> GetSingleAsync(owin_user_DTO username);
    }
}

