using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace AutomataLogicLayer.Compilers
{
    public interface ICompiler
    {
        Assembly Compile(string code);
    }
}
