using Microsoft.JSInterop;
using System;
using System.Threading.Tasks;

namespace TheVoidOfficial2.Logic.Commuication
{
    public interface ICookie
    {
        IJSRuntime _rt { get; set; }

       // void Init(IJSRuntime rt);

         ValueTask Create(string name, string value, int exdays);
         ValueTask<string> GetCookie(string name);
    }
}