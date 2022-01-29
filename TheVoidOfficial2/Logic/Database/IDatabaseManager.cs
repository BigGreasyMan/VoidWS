using System.Collections.Generic;
using System.Threading.Tasks;
using TheVoidOfficial2.Data;

namespace TheVoidOfficial2.Logic.Database
{
    public interface IDatabaseManager
    {
        Task<List<MarketItem>> ReturnproductsByTerm(ApplicationDbContext _dbContext, string term);
        Task<List<MarketItem>> ReturnRecommednedProducts(ApplicationDbContext _dbContext);
    }
}