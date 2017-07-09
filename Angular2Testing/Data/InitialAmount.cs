using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular2Testing.Data
{
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
