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
using SailorApp.Domain.Entity;
using System.Data.Common;
using NpgsqlTypes;
using System.Data;
using SailorApp.Domain.DTO.DTParameter;
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


        public async Task Delete(tran_ScmPoEntity entity)
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

        public async Task<List<tran_scm_po_DTO>> GetAllFabricsPoAsync(tran_scm_po_DTO obj)
        {
            try
            {
                string query = "SELECT * FROM public.proc_sp_get_data_tran_scm_po_fab( @row_index,@page_size,@fiscal_year,@p_event_id,@supplier,@p_delivery_unit_id,@list_type,@search_text)";
              
                using (var connection = new NpgsqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                   
                    var dataList =await  connection.QueryAsync<tran_scm_po_DTO>(query,
                          new
                          {
                              row_index = obj.row_index,
                              page_size = obj.page_size,
                              fiscal_year = obj.fiscal_year_id,
                              p_event_id = obj.event_id,
                              supplier = obj.supplier_id,
                              p_delivery_unit_id = obj.delivery_unit,
                              list_type = 0,
                              search_text = obj.dtsearch?.Value ?? null
                          }
                         );

                    return dataList.ToList();

                }

            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while fetching data.", ex);
            }

        }
        public async Task<IEnumerable<tran_ScmPoEntity>> GetPagination(tran_ScmPoEntity obj)
        {

            int data = (obj.pageNumber - 1) * obj.pageSize;
            string commandText = $"SELECT * FROM public.tran_scm_po  ORDER BY po_id LIMIT @PageSize";

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                return await connection.QueryAsync<tran_ScmPoEntity>(commandText, new { PageSize = obj.pageSize, Data = data });
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

       
        public async Task Add(tran_ScmPoEntity objtran_scm_po)
        {

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                connection.Open();

                using (var transaction = connection.BeginTransaction())
                {
                    try
                    {
                        var Command = new NpgsqlCommand("tran_scm_po_insert", connection);

                        Command.CommandType = CommandType.StoredProcedure;

                        Command.Parameters.AddWithValue("in_po_no", NpgsqlDbType.Text, objtran_scm_po.po_no == null ? DBNull.Value : objtran_scm_po.po_no);
                        Command.Parameters.AddWithValue("in_po_date", NpgsqlDbType.Date, objtran_scm_po.po_date == null ? DBNull.Value : objtran_scm_po.po_date);
                        Command.Parameters.AddWithValue("in_delivery_start_date", NpgsqlDbType.Date, objtran_scm_po.delivery_start_date == null ? DBNull.Value : objtran_scm_po.delivery_start_date);
                        Command.Parameters.AddWithValue("in_delivery_end_date", NpgsqlDbType.Date, objtran_scm_po.delivery_end_date == null ? DBNull.Value : objtran_scm_po.delivery_end_date);
                        Command.Parameters.AddWithValue("in_supplier_id", NpgsqlDbType.Bigint, objtran_scm_po.supplier_id == null ? DBNull.Value : objtran_scm_po.supplier_id);
                        Command.Parameters.AddWithValue("in_delivery_unit", NpgsqlDbType.Bigint, objtran_scm_po.delivery_unit == null ? DBNull.Value : objtran_scm_po.delivery_unit);
                        Command.Parameters.AddWithValue("in_delivery_address", NpgsqlDbType.Bigint, objtran_scm_po.delivery_address == null ? DBNull.Value : objtran_scm_po.delivery_address);
                        Command.Parameters.AddWithValue("in_currency_id", NpgsqlDbType.Bigint, objtran_scm_po.currency_id == null ? DBNull.Value : objtran_scm_po.currency_id);
                        Command.Parameters.AddWithValue("in_documents", NpgsqlDbType.Text, objtran_scm_po.documents == null ? DBNull.Value : objtran_scm_po.documents);
                        Command.Parameters.AddWithValue("in_terms_conditions", NpgsqlDbType.Text, objtran_scm_po.terms_conditions == null ? DBNull.Value : objtran_scm_po.terms_conditions);
                        Command.Parameters.AddWithValue("in_status", NpgsqlDbType.Bigint, objtran_scm_po.status == null ? DBNull.Value : objtran_scm_po.status);
                        Command.Parameters.AddWithValue("in_added_by", NpgsqlDbType.Bigint, objtran_scm_po.added_by == null ? DBNull.Value : objtran_scm_po.added_by);
                        Command.Parameters.AddWithValue("in_updated_by", NpgsqlDbType.Bigint, objtran_scm_po.updated_by == null ? DBNull.Value : objtran_scm_po.updated_by);
                        Command.Parameters.AddWithValue("in_date_added", NpgsqlDbType.Date, objtran_scm_po.date_added == null ? DBNull.Value : objtran_scm_po.date_added);
                        Command.Parameters.AddWithValue("in_date_updated", NpgsqlDbType.Date, objtran_scm_po.date_updated == null ? DBNull.Value : objtran_scm_po.date_updated);
                        Command.Parameters.AddWithValue("in_pr_id", NpgsqlDbType.Bigint, objtran_scm_po.pr_id == null ? DBNull.Value : objtran_scm_po.pr_id);
                        Command.Parameters.AddWithValue("in_item_structure_group_id", NpgsqlDbType.Bigint, objtran_scm_po.item_structure_group_id == null ? DBNull.Value : objtran_scm_po.item_structure_group_id);
                        Command.Parameters.AddWithValue("in_approved_date", NpgsqlDbType.Date, objtran_scm_po.approved_date == null ? DBNull.Value : objtran_scm_po.approved_date);
                        Command.Parameters.AddWithValue("in_approved_by", NpgsqlDbType.Bigint, objtran_scm_po.approved_by == null ? DBNull.Value : objtran_scm_po.approved_by);
                        Command.Parameters.AddWithValue("in_event_id", NpgsqlDbType.Bigint, objtran_scm_po.event_id == null ? DBNull.Value : objtran_scm_po.event_id);
                        Command.Parameters.AddWithValue("in_fiscal_year_id", NpgsqlDbType.Bigint, objtran_scm_po.fiscal_year_id == null ? DBNull.Value : objtran_scm_po.fiscal_year_id);
                        Command.Parameters.AddWithValue("in_is_submitted", NpgsqlDbType.Bigint, objtran_scm_po.is_submitted == null ? DBNull.Value : objtran_scm_po.is_submitted);
                        Command.Parameters.AddWithValue("in_is_approved", NpgsqlDbType.Bigint, objtran_scm_po.is_approved == null ? DBNull.Value : objtran_scm_po.is_approved);
                        Command.Parameters.AddWithValue("in_vat_amount", NpgsqlDbType.Numeric, objtran_scm_po.vat_amount == null ? DBNull.Value : objtran_scm_po.vat_amount);
                        Command.Parameters.AddWithValue("in_discount_amount", NpgsqlDbType.Numeric, objtran_scm_po.discount_amount == null ? DBNull.Value : objtran_scm_po.discount_amount);
                        Command.Parameters.AddWithValue("in_final_amount", NpgsqlDbType.Bigint, objtran_scm_po.final_amount == null ? DBNull.Value : objtran_scm_po.final_amount);
                        Command.Parameters.AddWithValue("in_supplier_concern_person", NpgsqlDbType.Text, objtran_scm_po.supplier_concern_person == null ? DBNull.Value : objtran_scm_po.supplier_concern_person);
                        Command.Parameters.AddWithValue("in_supplier_address", NpgsqlDbType.Text, objtran_scm_po.supplier_address == null ? DBNull.Value : objtran_scm_po.supplier_address);
                        Command.Parameters.AddWithValue("in_po_details", NpgsqlDbType.Text, objtran_scm_po.po_details == null ? DBNull.Value : objtran_scm_po.po_details);

                        Command.ExecuteNonQuery();

                        transaction.Commit();

                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error: {ex.Message}");
                        transaction.Rollback();
                    }
                }
            }

        }


        public async Task Update(tran_ScmPoEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
