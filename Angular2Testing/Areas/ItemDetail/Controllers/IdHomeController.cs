using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QuickStart3.Areas.ItemDetail.Controllers
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