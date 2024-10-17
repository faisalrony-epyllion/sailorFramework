using Microsoft.Extensions.DependencyInjection;
using Sailor.Application.Interface;
using Sailor.Infrastructure.Service.SCM;
using Sailor.Infrastructure.Service.USER;
using Sailor.Repository.Implementation.SCM;
using Sailor.Repository.Implementation.USER;
using Sailor.Repository.Interface.SCM;
using Sailor.Repository.Interface.USER;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sailor.Application;

namespace Sailor.Infrastructure
{
    public static class ServiceRegistration
    {
        public static void AddInfrastructure(this IServiceCollection Services)
        {

            Services.AddScoped<IFabricPoService, FabricPoService>();
            Services.AddScoped<IFabricPoRepository, FabricPoRepository>();
            Services.AddScoped<IuserServicecs, UserService>();
            Services.AddScoped<IUserRepository, UserRepository>();


        }
    }
}
