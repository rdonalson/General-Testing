using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.OData;
using Angular2Testing.Data;

namespace Angular2Testing.Areas.ItemDetail.Controllers.Odata
{
    /// ===========================================================================================
    /// <summary>
    ///     "odata" ItemDetail Controller
    /// </summary>
    /// ===========================================================================================
    [Authorize]
    public class OdataInitialAmountsController : ODataController
    {
        private readonly Entity _db;

        public OdataInitialAmountsController()
        {
            _db = new Entity();
        }
        /// -----------------------------------------------------------------------------------------------
        /// <summary>
        ///     GET: odata/OdataInitialAmounts
        /// </summary>
        /// <returns>IQueryable(InitialAmount)</returns>
        /// -----------------------------------------------------------------------------------------------
        [EnableQuery]
        public IQueryable<InitialAmount> GetOdataInitialAmounts()
        {
            return _db.InitialAmounts;
        }

        /// -----------------------------------------------------------------------------------------------
        /// <summary>
        ///     odata/OdataInitialAmounts(4)
        /// </summary>
        /// <param name="key">int</param>
        /// <returns>SingleResult(InitialAmount)</returns>
        /// -----------------------------------------------------------------------------------------------
        [EnableQuery]
        public SingleResult<InitialAmount> GetInitialAmount([FromODataUri] int key)
        {
            return SingleResult.Create(_db.InitialAmounts.Where(initialAmount => initialAmount.PkID == key));
        }

        /// -----------------------------------------------------------------------------------------------
        /// <summary>
        ///     PUT: odata/OdataInitialAmounts(5)
        /// </summary>
        /// <param name="key">int</param>
        /// <param name="patch">Delta(InitialAmount)</param>
        /// <returns>IHttpActionResult</returns>
        /// -----------------------------------------------------------------------------------------------
        public IHttpActionResult Put([FromODataUri] int key, Delta<InitialAmount> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var initialAmount = _db.InitialAmounts.Find(key);
            if (initialAmount == null)
                return NotFound();

            patch.Put(initialAmount);

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InitialAmountExists(key))
                    return NotFound();
                throw;
            }

            return Updated(initialAmount);
        }

        // POST: odata/OdataInitialAmounts
        public IHttpActionResult Post(InitialAmount initialAmount)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _db.InitialAmounts.Add(initialAmount);
            _db.SaveChanges();

            return Created(initialAmount);
        }

        // PATCH: odata/OdataInitialAmounts(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<InitialAmount> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var initialAmount = _db.InitialAmounts.Find(key);
            if (initialAmount == null)
                return NotFound();

            patch.Patch(initialAmount);

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InitialAmountExists(key))
                    return NotFound();
                throw;
            }

            return Updated(initialAmount);
        }

        // DELETE: odata/OdataInitialAmounts(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            var initialAmount = _db.InitialAmounts.Find(key);
            if (initialAmount == null)
                return NotFound();

            _db.InitialAmounts.Remove(initialAmount);
            _db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
                _db.Dispose();
            base.Dispose(disposing);
        }

        private bool InitialAmountExists(int key)
        {
            return _db.InitialAmounts.Count(e => e.PkID == key) > 0;
        }
    }
}

/*
The WebApiConfig class may require additional changes to add a route for this controller. 
Merge these statements into the Register method of the WebApiConfig class as applicable. 
Note that OData URLs are case sensitive.

using System.Web.Http.OData.Builder;
using System.Web.Http.OData.Extensions;
using Angular2Testing.Data;
ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
builder.EntitySet<InitialAmount>("OdataInitialAmounts");
config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
*/