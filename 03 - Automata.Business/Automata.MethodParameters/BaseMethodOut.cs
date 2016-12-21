using Automata.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.MethodParameters
{
    public class BaseMethodOut
    {
        public OperationResult OperationResult { get; set; }

        public BaseMethodOut()
        {
            this.OperationResult = OperationResult.Error;
        }
    }
}
