using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheVoidOfficial2.Data.ValidationModels
{
    public class CurrentUser
    {
        [Required]
        [DataType(DataType.EmailAddress)]

        public string Username { get; set; }


        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}
