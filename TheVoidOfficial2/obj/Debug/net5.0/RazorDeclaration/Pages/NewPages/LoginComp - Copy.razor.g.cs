// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace TheVoidOfficial2.Pages.NewPages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using TheVoidOfficial2;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\_Imports.razor"
using TheVoidOfficial2.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\LoginComp - Copy.razor"
using TheVoidOfficial2.Data.ValidationModels;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\LoginComp - Copy.razor"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\LoginComp - Copy.razor"
using Microsoft.AspNetCore.WebUtilities;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/Join")]
    public partial class LoginComp___Copy : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#nullable restore
#line 21 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\LoginComp - Copy.razor"
       
    private NewUser _newUser = new NewUser();
    private async Task HandleValidSubmit()
    {
        var newIdentity = new IdentityUser() { UserName = _newUser.UserName, Email = _newUser.Email, PhoneNumber = _newUser.Phonenumber };
        var result = await _userManager.CreateAsync(newIdentity, _newUser.Password);
        if (result.Succeeded)
        {
            // _logger.LogInformation("User created a new account with password.");

            //var code = await _userManager.GenerateEmailConfirmationTokenAsync(newIdentity);
            //code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            //var callbackUrl = Url.Page(
            //    "/Account/ConfirmEmail",
            //    pageHandler: null,
            //    values: new { area = "Identity", userId = user.Id, code = code },
            //    protocol: Request.Scheme);

            //await _emailSender.SendEmailAsync(Input.Email, "Confirm your email",
            //    $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

            //if (_userManager.Options.SignIn.RequireConfirmedAccount)
            //{
            //    return RedirectToPage("RegisterConfirmation",
            //                          new { email = Input.Email });
            //}
            // else
            //{
            await _signInManager.SignInAsync(newIdentity, isPersistent: false);
            NavigationManager.NavigateTo("/counter/");
            // }
        }
    }

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private SignInManager<IdentityUser> _signInManager { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private UserManager<IdentityUser> _userManager { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private NavigationManager NavigationManager { get; set; }
    }
}
#pragma warning restore 1591
