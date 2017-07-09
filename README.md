# General-Testing
Misc experimentation

Currently experimenting with Angular 2 structures & CRUD

This is a hybrid application with MVC5 and Angular 2 with an OData Api. Regular MVC Controllers limit access to the CRUD forms with the Authorized attribute The OData Api controller is protected in the same manner. All of the Angular 2 items are in the Areas -> ItemDetail -> InitialAmount -> tsScripts folder. The output is placed in the adjacent Scripts foldersFor example the IdHome Controller is hit one time when first accessing the ItemDetail section:  

[Authorize]  
public class IdHomeController : Controller  
{  
        // GET: ItemDetail/IdHome  
        public ActionResult Index()  
        {  
                 return View();  
        }      
}    

Then you're in it's NG2 SPA. The same for InitialAmount & Tester ControllersLogin Instructions: Create your own login by registeringAfter logging go to “Item Detail” and then “Initial Amount”. Once there create some records, then you can edit or delete them.
