using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.UIProcess.Entities.Common
{
    public abstract class ContextInfo
    {
        public string IpAddress { get; set; }

        public string UserAgent { get; set; }

        public string SessionId { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }
    }
}
