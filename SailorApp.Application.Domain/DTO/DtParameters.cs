﻿using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SailorApp.Domain.DTO.DTParameter
{
    public class AjaxResponse
    {
        public Object data { get; }
        public long recordsTotal { get; }
        public long recordsFiltered { get; }

        public string responsecode { get; }
        public string responsetext { get; }
        public string responsestatus { get; }
        public string responsetitle { get; }
        public string responseredirecturl { get; }

        public AjaxResponse(string _responsecode, string _responsetext, string _responsestatus, string _responsetitle, string _responseredirecturl)
        {
            responsecode = _responsecode;
            responsetext = _responsetext;
            responsestatus = string.IsNullOrEmpty(_responsestatus) == true ? "Success" : _responsestatus;
            responsetitle = _responsetitle;
            responseredirecturl = _responseredirecturl;
        }
        public AjaxResponse(long _recordsTotal, Object _data)
        {
            recordsTotal = _recordsTotal;
            recordsFiltered = _recordsTotal;
            data = _data;
        }
        public AjaxResponse(Object _data)
        {
            data = _data;
        }
    }
    public class DtParameters
    { 
        public int Start { get; set; }
        public int Length { get; set; } = 500;
        public DtSearch? Search { get; set; }
        public Int64 fiscal_year_id { get; set; } = 1;
        public Int64 event_id { get; set; } = 9;
        public Int64 supplier_id { get; set; } = 0;
        public Int64 delivery_unit_id { get; set; } = 0;
        public string? search_text { get; }
    }

    public class MCD_DtParameters : DtParameters
    {
        public long group_id { get; set; }

        public long sub_group_id { get; set; }

    }

    public class TechPack_DtParameters : DtParameters
    {
        public long techpack_id { get; set; }
        public string active_tag { get; set; }
        public long gen_finishing_process_id { get; set; }

    }

    public class PR_DtParameters : DtParameters
    {
        public long group_id { get; set; }

        public long sub_group_id { get; set; }

    }


    public class Chat_DtParameters : DtParameters
    {
        public long? group_id { get; set; }

        public string? to_user_name { get; set; }
        public string? from_user_name { get; set; }


    }
    public class DtColumn
    {
        public string Data { get; set; }
        public string Name { get; set; }
        public bool Searchable { get; set; }
        public bool Orderable { get; set; }
        public DtSearch Search { get; set; }
    }

    public class DtOrder
    {
        public int Column { get; set; }
        public DtOrderDir Dir { get; set; }
    }

    public enum DtOrderDir
    {
        Asc,
        Desc
    }

    public class DtSearch
    {
        public string Value { get; set; }
        public bool Regex { get; set; }
    }

}
