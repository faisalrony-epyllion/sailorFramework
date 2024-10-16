using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using Sailor.Repository.Helper;
using SailorApp.Domain.DTO.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sailor.Repository.Implementation.USER
{
    public class UserRepository
    {
        private readonly string _connectionString;

        public UserRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString(DatabaseConnection.PGConnectionString);

        }

        public async Task<owin_user_DTO> GetSingleAsync(owin_user_DTO user)
        {
            try
            {
                using (NpgsqlConnection connection = new NpgsqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    string query = @"SELECT m.* FROM owin_user m WHERE m.user_name = @username";

                    var data = await connection.QueryFirstOrDefaultAsync<owin_user_DTO>(query, new { user.user_name });

                    return data;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while fetching the user data.", ex);
            }
        }



    }

}
