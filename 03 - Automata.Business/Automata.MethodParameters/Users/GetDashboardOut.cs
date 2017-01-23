using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.MethodParameters.Users
{
    public class GetDashboardOut : BaseMethodOut
    {
        public int ProjectsCount { get; set; }
        public int PagesCount { get; set; }
        public int MethodsCount { get; set; }
        public int TestsCount { get; set; }
        public int SuitesCount { get; set; }
    }
}
