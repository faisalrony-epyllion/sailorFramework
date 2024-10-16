using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SailorApp.Domain.Entity.SCM
{
    public class tran_ScmPoEntity:BaseEntity
    {
        public Int64? pr_id { get; set; }
        public Int64? po_id { get; set; }
        public Int64? event_id { get; set; }
        public Int64? fiscal_year_id { get; set; }
        public Int64? item_structure_group_id { get; set; }

        [Column("po_no")]
        public String po_no { get; set; }

        public DateTime? po_date { get; set; }

        public DateTime? delivery_start_date { get; set; }

        public DateTime? delivery_end_date { get; set; }

        public Int64? supplier_id { get; set; }

        public Int64? delivery_unit { get; set; }
    }
}
