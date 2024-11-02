using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using Sailor.Application.Interface;
using Sailor.Repository.Helper;
using Sailor.Repository.Interface.USER;
using SailorApp.Domain.DTO.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Sailor.Repository.Implementation.USER
{
    public class UserRepository:IUserRepository
    {
        private readonly string _connectionString;
        private readonly VerifyPassword _password; 

        public UserRepository(IConfiguration configuration, VerifyPassword password)
        {
            _connectionString = configuration.GetConnectionString(DatabaseConnection.PGConnectionString);
            _password = password;
            
        }

        public async Task<owin_user_DTO> GetSingleAsync(owin_user_DTO user)
        {
            try
            {
                using (NpgsqlConnection connection = new NpgsqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    
                    string query = @"SELECT user_name,password FROM owin_user m WHERE m.is_active = true AND m.user_name = @user_name";

                    var userData = await connection.QueryFirstOrDefaultAsync<owin_user_DTO>(query, new { user_name = user.user_name });

                    bool isPasswordValid = _password.VerifyPasswordHash(user.password, userData.password);
                    if (isPasswordValid)
                    {
                        return userData; 
                    }
                    return null;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while fetching the user data.", ex);
            }
        }

        Task IService<owin_user_DTO>.Add(owin_user_DTO item)
        {
            throw new NotImplementedException();
        }

        Task IService<owin_user_DTO>.Delete(owin_user_DTO item)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<owin_user_DTO>> IService<owin_user_DTO>.GetAll()
        {
            throw new NotImplementedException();
        }

        Task<owin_user_DTO> IService<owin_user_DTO>.GetById(int id)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<owin_user_DTO>> IService<owin_user_DTO>.GetPagination(owin_user_DTO item)
        {
            throw new NotImplementedException();
        }

        Task<owin_user_DTO> IUserRepository.GetSingleAsync(owin_user_DTO username)
        {
            throw new NotImplementedException();
        }

        Task IService<owin_user_DTO>.Update(owin_user_DTO item)
        {
            throw new NotImplementedException();
        }
    }

}
