using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bettermart.Domain.Entities
{
    public class BettermartDatabase
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;

        public string[] CollectionsNames { get; set; } = null!;
    }
}
