using System.Web.Mvc;

namespace Angular2Testing.Areas.ItemDetail.Controllers
{
    [Authorize]
    public class IdHomeController : Controller
    {
        // GET: ItemDetail/IdHome
        public ActionResult Index()
        {
            return View();
        }
    }
}