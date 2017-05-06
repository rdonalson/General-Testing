using System.Web.Mvc;

namespace QuickStart3.Areas.ItemDetail
{
    public class ItemDetailAreaRegistration : AreaRegistration
    {
        public override string AreaName => "ItemDetail";

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "ItemDetail_default",
                "ItemDetail/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}