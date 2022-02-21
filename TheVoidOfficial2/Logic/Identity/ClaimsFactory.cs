using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Threading.Tasks;

namespace TheVoidOfficial2.Logic.Identity
{
    public class ClaimsFactory : UserClaimsPrincipalFactory<IdentityUser>
    {
        public ClaimsFactory(UserManager<IdentityUser> userManager, IOptions<IdentityOptions> optionsAccessor) : base(userManager, optionsAccessor)
        {
            
        }

        protected async override Task<ClaimsIdentity> GenerateClaimsAsync(IdentityUser user)
        {
            //called on authentication (permenent claims?)
            var identity = await base.GenerateClaimsAsync(user);
            identity.AddClaim(new Claim("ColorPreferance", "pink"));
            return identity;
        }
    }
}
