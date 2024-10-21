using Microsoft.AspNetCore.Mvc;

namespace SailorAPP.Areas.SCM.Controllers
{
    [Area("SCM")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

