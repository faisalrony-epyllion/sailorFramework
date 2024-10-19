using Sailor.Repository.Interface.SCM;
using SailorApp.Domain.Entity.SCM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Dapper;
using Npgsql;
using Sailor.Repository.Helper;
using SailorApp.Domain.DTO.SCM;

namespace Sailor.Repository.Implementation.SCM
{
    public class FabricPoRepository : IFabricPoRepository
    {
        private readonly string _connectionString;

        public FabricPoRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString(DatabaseConnection.PGConnectionString);

        }
        public void Add(tran_ScmPoEntity entity)
        {
            throw new NotImplementedException();
        }


        public void Delete(tran_ScmPoEntity entity)
        {
            throw new NotImplementedException();
        }

        public tran_ScmPoEntity Get(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<tran_ScmPoEntity>> GetAll()
        {
            string commandText = "SELECT * FROM public.tran_scm_po limit 10";

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var result = await connection.QueryAsync<tran_ScmPoEntity>(commandText);
                return result;
            }
        }

        


        public async Task<tran_ScmPoEntity> GetById(int id)
        {
            string query = "SELECT * FROM public.tran_scm_po WHERE po_id = @Id";

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                return await connection.QueryFirstOrDefaultAsync<tran_ScmPoEntity>(query, new { Id = id });
            }
        }

        public void Update(tran_ScmPoEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
