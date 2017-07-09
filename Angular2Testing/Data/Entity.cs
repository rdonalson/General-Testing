using System.Data.Entity;

namespace Angular2Testing.Data
{
    public partial class Entity : DbContext
    {
        public Entity() : base(Properties.Settings.Default.DefaultConnection)
        {
        }

        public virtual DbSet<InitialAmount> InitialAmounts { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
