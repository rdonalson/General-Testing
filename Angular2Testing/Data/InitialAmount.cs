namespace QuickStart3.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ItemDetail.InitialAmount")]
    public partial class InitialAmount
    {
        [Key]
        public int PkID { get; set; }

        [Required]
        [StringLength(75)]
        public string UserName { get; set; }

        public double? Amount { get; set; }

        [Column(TypeName = "date")]
        public DateTime? BeginDate { get; set; }
    }
}
