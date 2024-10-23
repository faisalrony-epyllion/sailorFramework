using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
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
            var tableHeader = new List<string>() { "PO No", "PR No", "PO Date", "Supplier", "Delivery unit"};
            


            var objCommonLandingGrid = new CommonLandingGrid()
            {
                PageHeader = "Fabric Po List",
                TabNamesWithColumnNames = new Dictionary<string, List<string>>(),
                PartialViewNameForAddEdit = "_FabricPoNew.cshtml",
                ShowFilter = false,
            };
            objCommonLandingGrid.TabNamesWithColumnNames.Add("Pending List", tableHeader);
           // objCommonLandingGrid.TabNamesWithColumnNames.Add("Submitted List", tableHeader);
            return View(objCommonLandingGrid);
        }

        [HttpGet]
        public async Task<IActionResult> Create()
        {


            

            return View();

        }
    }
}
