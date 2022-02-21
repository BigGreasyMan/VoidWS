using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Caching.Memory;
using System.Security.Claims;
using System.Threading.Tasks;

namespace TheVoidOfficial2.Logic.Identity
{
    public class ClaimsTransformation : IClaimsTransformation
    {
        IMemoryCache _cache;
        public ClaimsTransformation(IMemoryCache cache)
        {
            _cache = cache;
        }
        public  Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal incomingPrincipal)
        {
           
            //return Task.FromResult(incomingPrincipal);
            //if (!incomingPrincipal.Identity.IsAuthenticated)
            //{
            //    return Task.FromResult(incomingPrincipal);
            //}

            ////var principal = new ClaimsPrincipal();

            //if (!incomingPrincipal.HasClaim(c => c.Type == "colorPrefrense")
            // && _cache.TryGetValue(incomingPrincipal.Identity.Name, out ClaimsIdentity claimsIdentity))
            //{
            //    incomingPrincipal.AddIdentity(claimsIdentity);
            //    return Task.FromResult(incomingPrincipal);
            //}

            //ClaimsIdentity newClaimsIdentity = new ClaimsIdentity();
            //var claim = new Claim("colorPrefrense", "red");
            //newClaimsIdentity.AddClaim(claim);

            //_cache.Set(incomingPrincipal.Identity.Name, newClaimsIdentity,
            //System.DateTime.Now.AddHours(1));

            //incomingPrincipal.AddIdentity(newClaimsIdentity);


            return Task.FromResult(incomingPrincipal);
        }
    }
}
