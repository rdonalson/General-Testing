using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuickStart3.Areas.ItemDetail.Controllers
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