using System.Threading.Tasks;
using TheVoidOfficial2.Data;
using TheVoidOfficial2.Data.Enum;

namespace TheVoidOfficial2.Logic.Database
{
    public interface IUserSettingManager
    {
        Task CreateSettingRecord(string userID);
        Task UpdateSetting(UserSetting.UserSettings setting, string value, string userID);
        ValueTask<UserSettings> GetSetting(string userID);
    }
}