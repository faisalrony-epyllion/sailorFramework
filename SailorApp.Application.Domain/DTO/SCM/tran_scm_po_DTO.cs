﻿using SailorApp.Domain.DTO.DTParameter;

namespace SailorApp.Domain.DTO.SCM
{
    public class tran_scm_po_DTO
    {
        public int page_size { get; set; }
        public int row_index { get; set; }
        public Int64? po_id { get; set; }
        public string? po_no { get; set; }
        public string? pr_no { get; set; }
        public DateTime? po_date { get; set; }
        public string? unit_name { get; set; }
        public string? supplier_name { get; set; }
        public string? event_title { get; set; }
        public Int64? supplier_id { get; set; }
        public Int64? delivery_unit { get; set; }
        public Int64? event_id { get; set; }
        public Int64? fiscal_year_id { get; set; }

        public dtsearch? dtsearch { get; set; }

}
}