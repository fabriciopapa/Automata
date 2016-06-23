using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace AutomataLogicLayer.Runners
{
    public interface IRunner
    {
        void Run(Assembly code);
    }
}
