using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SailorAPP.Areas.SCM.Model
{
    public class CommonLandingGrid
    {
       
        public Dictionary<string, List<string>> TabNamesWithColumnNames { get; set; }
        public String PageHeader { get; set; }
        public String PartialViewNameForAddEdit { get; set; }

        public bool ShowFilter { get; set; }
    }



}
