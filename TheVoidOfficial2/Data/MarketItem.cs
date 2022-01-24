using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheVoidOfficial2.Data
{
    public class MarketItem
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public double Qty { get; set; }
        public double DataAdded { get; set; }
        public string ImageLocation { get; set; }
    }
}
