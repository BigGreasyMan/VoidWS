using System.Linq;
using System.Threading.Tasks;
using TheVoidOfficial2.Data;
using static TheVoidOfficial2.Data.Enum.UserSetting;

namespace TheVoidOfficial2.Logic.Database
{
    public class UserSettingManager : IUserSettingManager
    {

        ApplicationDbContext _db;
        public UserSettingManager(ApplicationDbContext db)
        {
            _db = db;
        }

        public Task CreateSettingRecord(string userID)
        {
            _db.UserPreferences.Add(new Data.UserSettings() { Id = userID, textColor = "white" });
            return _db.SaveChangesAsync();
        }
        //create account
        public async Task UpdateSetting(Data.Enum.UserSetting.UserSettings setting, string value, string userID)
        {
            var settingModel = await _db.UserPreferences.FindAsync(userID);

            switch (setting)
            {
                case Data.Enum.UserSetting.UserSettings.textColor:
                    settingModel.textColor = value;
                    break;
            }
        }
        public  ValueTask<Data.UserSettings> GetSetting(string userID)
        {
            return  _db.UserPreferences.FindAsync(userID);
        }
        //update setting


    }
}
