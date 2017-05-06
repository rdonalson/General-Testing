namespace QuickStart3.Data
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

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
