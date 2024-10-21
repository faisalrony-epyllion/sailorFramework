using Sailor.Application.Interface;
using Sailor.Infrastructure.Service.SCM;
using Sailor.Infrastructure.Service.USER;
using Sailor.Repository.Helper;
using Sailor.Repository.Implementation.SCM;
using Sailor.Repository.Implementation.USER;
using Sailor.Repository.Interface.SCM;
using Sailor.Repository.Interface.USER;
using SailorAPI.Utils;

namespace SailorAPI.API.Extension
{
    public static class ServiceExtensions
    {
        public static void AddApplication(this IServiceCollection service)
        {


            service.AddScoped<IFabricPoService, FabricPoService>();
            service.AddScoped<IFabricPoRepository, FabricPoRepository>();
            service.AddScoped<IUserServicecs, UserService>();
            service.AddScoped<IUserRepository, UserRepository>();
            service.AddScoped<GenerateToken>();
            service.AddScoped<GenerateToken>();
            service.AddScoped<VerifyPassword>();

        }
    }


}