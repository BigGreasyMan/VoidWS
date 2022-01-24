using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheVoidOfficial2.Data.ValidationModels
{
    public class NewUser
    {
        [Required]
        [DataType(DataType.PhoneNumber)]
        //[RegularExpression(@"^\\(?(\[0-9\]{3})\\)?\[-.●\]?(\[0-9\]{3})\[-.●\]?(\[0-9\]{4})$", ErrorMessage = "Invalid Number,Just enter your real one")]
        public string Phonenumber { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]

        public string Email { get; set; }

        [Required]
        [StringLength(10, ErrorMessage = "Length: 4 - 10 Chars"),MinLength(4)]
        public string UserName { get; set; }
        [Required]
        [DataType(DataType.Password)]
        //[RegularExpression("^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$", ErrorMessage = "Passwords must be at least 8 characters and contain at 3 of 4 of the following: upper case (A-Z), lower case (a-z), number (0-9) and special character (e.g. !@#$%^&*)")]
        public string Password { get; set; }
    }
}
