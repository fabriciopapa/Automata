using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace AutomataLogicLayer
{
    public interface IRunner
    {
        void CompileAndRun(string code);
    }
}
