using Microsoft.AspNetCore.Mvc;
using SailorAPP.Areas.SCM.Model;

namespace SailorAPP.Areas.SCM.Controllers
{
    [Area("SCM")]
    public class FabricPOController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.script = "/js/FabricPo.js";
            //var tableHeader = new List<string>() { "PO no", "PR No", "PO date", "Supplier", "Delivery Unit", "Action" };
            var tableHeader = new List<string>() { "pr_id", "po_id", "event_id", "fiscal_year_id", "item_structure_group_id", "po_no", "po_date", "delivery_start_date", "delivery_end_date", "supplier_id", "delivery_unit" };
            


            var objCommonLandingGrid = new CommonLandingGrid()
            {
                PageHeader = "Fabric Po List",
                TabNamesWithColumnNames = new Dictionary<string, List<string>>(),
                PartialViewNameForAddEdit = "_FabricPoNew.cshtml",
                ShowFilter = false,
            };
            objCommonLandingGrid.TabNamesWithColumnNames.Add("Pending List", tableHeader);
            objCommonLandingGrid.TabNamesWithColumnNames.Add("Submitted List", tableHeader);
            return View(objCommonLandingGrid);
        }
    }
}
