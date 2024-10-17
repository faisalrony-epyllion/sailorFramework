﻿using Microsoft.AspNetCore.Mvc;
using SailorAPP.Areas.SCM.Model;

namespace SailorAPP.Areas.SCM.Controllers
{
    [Area("SCM")]
    public class FabricPOController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.script = "/js/FabricPo.js";
            var tableHeader = new List<string>() { "PO no", "PR No", "PO date", "Supplier", "Delivery Unit", "Action" };
            


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