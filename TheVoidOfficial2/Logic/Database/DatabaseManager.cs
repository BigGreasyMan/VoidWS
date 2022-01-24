using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheVoidOfficial2.Data;

namespace TheVoidOfficial2.Logic.Database
{
    public static class DatabaseManager
    {
        //Dictionary<string, ApplicationDbContext> _UserContexts = new Dictionary<string, ApplicationDbContext>();

        //IDbContextFactory<ApplicationDbContext> _dbContextFactory;

        //private int _concurrentDBSessions = 20;
        //public DatabaseManager(IDbContextFactory<ApplicationDbContext> dbContextFactory)
        //{
        //    _dbContextFactory = dbContextFactory;
        //}
       
        //public void CreateSessionContext(string key) 
        //{
        //    Console.WriteLine($"\n DB Session Created by: {key}");

        //    Console.WriteLine($"\n Active Sessions  {_UserContexts}");

        //    if (_UserContexts.TryGetValue(key, out ApplicationDbContext value)) { return; }

        //        //if (_UserContexts.Count > _concurrentDBSessions)
        //        //    _UserContexts.Remove(_UserContexts.Keys.First());

        //    var db = _dbContextFactory.CreateDbContext();
        //    _UserContexts.Add(key, db);
            
        //}
        //public void DisposeSessionContext(string key)
        //{
        //    _UserContexts[key].Dispose();
        //    Console.WriteLine($"\n DB Session Disposed by: {key}");
        //}


        //public async Task<int> AddMarketItem(ApplicationDbContext _dbContext,item) 
        //{
            
            
        //       await _dbContext.MarketItems.AddAsync(item);
        //       await _dbContext.SaveChangesAsync();

            
        //}
        public static async Task<List<MarketItem>> ReturnAllMarketItems(ApplicationDbContext _dbContext)
        {
            Console.WriteLine("Awaiting DataBase | Action: Return ALL");
            var output =  await _dbContext.MarketItems.ToListAsync();
            await Task.Delay(10000);
            Console.WriteLine($"Retrieved Data : {output}");
            _dbContext.Dispose();
            return output;
        }

    }
}
