using System.Web.Mvc;

namespace Angular2Testing.Areas.ItemDetail.Controllers
{
    //[Authorize]
    public class TesterController : Controller
    {
        // GET: ItemDetail/Tester
        public ActionResult Index()
        {
            return View();
        }
    }
}