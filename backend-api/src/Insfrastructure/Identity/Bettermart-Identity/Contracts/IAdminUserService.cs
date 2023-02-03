using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bettermart_Identity.Contracts
{
    public interface IAdminUserService
    {
        public Task<bool> createDefaultAdminUserAsync();
    }
}
