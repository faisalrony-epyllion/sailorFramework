using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SailorApp.Domain.Entity.SCM
{
    public class tran_scm_po_details_entity
    {
        public Int64? po_details_id { get; set; }

      //  [Required]
        public Int64? po_id { get; set; }

        [Required]
        public Int64? pr_id { get; set; }
        public string? item_name { get; set; }
        public string? item_spec { get; set; }
        public string? sub_group_name { get; set; }
        //[Required]
        public Int64? item_id { get; set; }

        public Decimal? item_quantity { get; set; }
        public Decimal? receive_quantity { get; set; }
        public Decimal? recevQty { get; set; }

        public string? unit { get; set; }

        public Decimal? unit_price { get; set; }

        public Decimal? total_price { get; set; }

        public string? remarks { get; set; }
        public string? uomText { get; set; }
        public long? uom { get; set; }
        public Int64? measurement_unit_detail_id { get; set; }
        public Int64? added_by { get; set; }

        public DateTime? date_added { get; set; }

        public Int64? updated_by { get; set; }

        public DateTime? date_updated { get; set; }
        public string? revise_status { get; set; }
        public Int64? gen_item_master_id { get; set; }
        public string? measurement_unit { get; set; }
        public string? del_chalan_no { get; set; }
    }
}
