using Microsoft.JSInterop;
using System;
using System.Threading.Tasks;

namespace TheVoidOfficial2.Logic.Commuication
{
    public class Cookie : ICookie
    {
        public IJSRuntime _rt { get; set; }

        public Cookie(IJSRuntime rt)
        {
            _rt = rt;
        }
        //public void Init(IJSRuntime rt)
        //{
        //    _rt = rt;

        //    create = (name, value, exdays) =>
        //    {
        //        Console.WriteLine("Creating Cookie");
        //        return _rt.InvokeVoidAsync("setCookie", name, value, exdays);
        //    };
        //}

        //private Func<string, string, int, ValueTask> create = (name, value, exdays) =>
        //{
        //    Console.WriteLine("Need to run Init");
        //    return ValueTask.CompletedTask;
        //};


        public ValueTask Create(string name, string value, int exdays)
        {
            Console.WriteLine("Creating Cookie");
            return _rt.InvokeVoidAsync("setCookie", name, value, exdays);
        }

        public ValueTask<string> GetCookie(string name)
        {
            Console.WriteLine("Creating Cookie");
            return _rt.InvokeAsync<string>("getCookie", name);
        }

        //public ValueTask Change(string name, string value, int exdays)
        //{
        //  //  return create(name, value, exdays);
        //}
    }
}
