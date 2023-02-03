using Bettermart_Identity.Contracts; 
using FirebaseAdmin.Auth;

namespace Bettermart_Identity.Services
{
    public class AdminUserService : IAdminUserService
    { 
        public async Task<bool> createDefaultAdminUserAsync()
        { 
            UserRecord userRecord;
            try
            {
                userRecord = await FirebaseAuth.DefaultInstance.GetUserByEmailAsync("admin@bettermart.com");
                return true;
            }
            catch (Exception)
            {
                // Handle the exception
                UserRecordArgs args = new UserRecordArgs()
                {
                    Uid = "adminuser",
                    Email = "admin@bettermart.com", 
                    Password = "password"
                };

                userRecord = await FirebaseAuth.DefaultInstance.CreateUserAsync(args);
                var claims = new Dictionary<string, object>()
                {
                    { "admin", true },
                };
                await FirebaseAuth.DefaultInstance.SetCustomUserClaimsAsync(userRecord.Uid, claims);

                return true;
            } 
        }
    }
}
