#pragma checksum "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\MarketComp.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4e6096a7a900c1f3344c22a407b40c2e07ac71ae"
// <auto-generated/>
#pragma warning disable 1591
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
#line 2 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\MarketComp.razor"
using Microsoft.EntityFrameworkCore;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\MarketComp.razor"
using TheVoidOfficial2.Data;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\MarketComp.razor"
using TheVoidOfficial2.Logic.Database;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\MarketComp.razor"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/market")]
    public partial class MarketComp : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "{\r\n\r\n");
            __builder.AddMarkupContent(1, "<div style=\"        background-color: #0a0a0a;\r\n        width: 450px;\r\n        height: auto;\r\n        margin-right: auto;\r\n        margin-left: auto;\r\n        opacity: 0.5;\r\n        position: relative;\r\n        color: #990a0a;\r\n\r\n                    \"><h1 style=\"        margin-left: 10px;\r\n\tletter-spacing:10px;\r\n        font-size: 28px;\r\n                    \">\r\n        [MarketPlace()]\r\n    </h1>\r\n\r\n    <br>\r\n\r\n\r\n    <div style=\"  width: 450px; height: 50px;  position: relative; letter-spacing: 1px; font-family: \'Times New Roman\';\" id=\"main\"></div>\r\n    <br>\r\n\r\n    <div style=\"width: 400px; margin-left: auto; margin-right: auto; position: relative; font-size: 20px; \"><span style=\"margin-left: auto; margin-right: auto; text-align:center;display: block; \">\r\n            [===================================]\r\n        </span>\r\n        <span style=\"margin-left: auto; margin-right: auto;  \"></span>\r\n        <span style=\"margin-left: auto; margin-right: auto;  \"></span>\r\n        <br>\r\n        <span style=\"margin-left: auto; margin-right: auto;  display: inline;\">\r\n            [0/1021]\r\n        </span>\r\n        <span style=\"margin-left: auto; margin-right: auto;  display: inline;\">\r\n            [BUY]\r\n        </span>\r\n        <span style=\"margin-left: auto; margin-right: auto; text-align:center;display: block; \">\r\n            [===================================]\r\n        </span>\r\n        <img style=\"position: absolute; width: 55px; height: 55px; top: 20%; left: 80%;\" @*src=\"@items[i].ImageLocation\" *@></div>\r\n\r\n\r\n\r\n    <br></div>");
        }
        #pragma warning restore 1998
#nullable restore
#line 69 "C:\Users\paulv\source\repos\TheVoidOfficial2\TheVoidOfficial2\Pages\NewPages\MarketComp.razor"
       

    private IJSObjectReference module;
    List<MarketItem> items = new List<MarketItem>();

    protected override async Task OnInitializedAsync()
    {

        // await JS.InvokeAsync<string>("summonPageBar");
        //return base.OnInitializedAsync();
    }
    protected override Task OnParametersSetAsync()
    {
        return base.OnParametersSetAsync();
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            //module = await JS.InvokeAsync<IJSObjectReference>("import",
            //    "/js/pageBar.js");
           await JS.InvokeAsync<string>("summonPageBar");
        }
    }
   





#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IHttpContextAccessor cont { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private DatabaseManager dbM { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JS { get; set; }
    }
}
#pragma warning restore 1591
