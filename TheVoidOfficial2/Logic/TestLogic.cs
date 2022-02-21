using System;

namespace TheVoidOfficial2.Logic
{
    public class TestLogic : ITestLogic
    {
        public string test { get; set; }
        public TestLogic()
        {
            test = Guid.NewGuid().ToString();
        }
    }
}
