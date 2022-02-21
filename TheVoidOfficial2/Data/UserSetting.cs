using Microsoft.EntityFrameworkCore.Metadata;
using System.ComponentModel.DataAnnotations;

namespace TheVoidOfficial2.Data
{
    public class UserSettings
    {
        [Key]
        public virtual string Id { get; set; }
        public virtual string textColor { get; set; }
    }
}
