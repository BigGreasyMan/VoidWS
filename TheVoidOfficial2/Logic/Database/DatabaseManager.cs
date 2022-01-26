using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheVoidOfficial2.Data;

namespace TheVoidOfficial2.Logic.Database
{
    public class DatabaseManager : IDatabaseManager
    {

        public async Task<List<MarketItem>> ReturnRecommednedProducts(ApplicationDbContext _dbContext)
        {
            Console.WriteLine("Awaiting DataBase | Action: Return ALL");

            var output = await _dbContext.MarketItems.ToListAsync();

            await Task.Delay(2000);

            Console.WriteLine($"Retrieved Data : {output}");

            _dbContext.Dispose();

            return output;
        }

        public async Task<List<MarketItem>> ReturnproductsByTerm(ApplicationDbContext _dbContext, string term)
        {
            Console.WriteLine("Awaiting DataBase | Action: Return By Term");
            //TODO this is probs shitty ass code
           // List<MarketItem> output = null;
            //try
            //{
            //    output = await _dbContext.MarketItems.Where(entitiy => entitiy.Name.IndexOf
            //    (term, StringComparison.OrdinalIgnoreCase) >= 0).ToListAsync();
            //}
            //catch { throw new Exception();  }

            var output = await _dbContext.MarketItems.Where(entitiy => entitiy.Name.Contains(term)).ToListAsync() ;

          

            Console.WriteLine($"Retrieved Data : {output}");

            _dbContext.Dispose();

            return output;
        }

    }
}
