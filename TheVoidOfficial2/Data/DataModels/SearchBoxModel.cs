using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Threading.Tasks;

namespace TheVoidOfficial2.Data.DataModels
{
    public class SearchBoxModel 
    {
        public event EventHandler<string> valueUpdated;

        private Stopwatch time = new Stopwatch();

        private bool isTaskRunning = false;

        public int valueUpdateInterval = 1000;

        [MinLength(length: 1)]
        [MaxLength(length: 100)]
        [Required(AllowEmptyStrings = false)]
        private string _value;

        public string value
        {
            get { return _value; }
            set 
            {
                if ((string)value.Trim() == _value)
                { _value = value; return; }

                Console.WriteLine(time.ElapsedMilliseconds);
                time.Restart();
                time.Start();
                if (!isTaskRunning)
                {
                        isTaskRunning = true;
                    Task.Run(async () =>
                    {
                        Console.WriteLine("in thread");
                        while (true)
                        {
                            //await Task.Delay(50);
                            if (time.ElapsedMilliseconds >= valueUpdateInterval) 
                            {
                                Console.WriteLine("Reached");
                                valueUpdated?.Invoke(this, value);
                                break;
                            }

                        }
                                isTaskRunning = false;
                        time.Stop();
                    });
                }


                _value = value;
            }
        }

        private async Task TestFunction() 
        {

        }
    }
    


}

