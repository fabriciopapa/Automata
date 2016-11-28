using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.UIProcess.Entities.Projects
{
    public class Project
    {
        public int PK_Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public bool Active { get; set; }
    }
}
