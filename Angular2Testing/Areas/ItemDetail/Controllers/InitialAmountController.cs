using System.Web.Mvc;

namespace Angular2Testing.Areas.ItemDetail.Controllers
{
    [Authorize]
    public class InitialAmountController : Controller
    {
        // GET: ItemDetail/InitialAmount
        public ActionResult Index()
        {
            return View();
        }
    }
}