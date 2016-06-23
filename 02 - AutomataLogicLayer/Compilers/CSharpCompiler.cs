using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.CSharp;

namespace AutomataLogicLayer.Compilers
{
    public class CSharpCompiler : ICompiler
    {
        public Assembly Compile(string code)
        {
            //Se agregan las referencias al compilador.
            CompilerParameters compilerParameters = new CompilerParameters();
            compilerParameters.GenerateInMemory = true;
            compilerParameters.GenerateExecutable = false;
            compilerParameters.TreatWarningsAsErrors = false;
            compilerParameters.WarningLevel = 4;
            //foreach (string ass in assemblies)
            //{
            //    compilerParameters.ReferencedAssemblies.Add(ass + ".dll");
            //}

            //Se compila.
            CompilerResults results = CodeDomProvider.CreateProvider("CSharp").CompileAssemblyFromSource(compilerParameters, code);
            if (results.Errors.Count > 0)
            {
                StringBuilder sbExceptions = new StringBuilder();
                foreach (CompilerError CompErr in results.Errors)
                {
                    sbExceptions.AppendLine(
                    "\nLínea: " + CompErr.Line +
                    "\nNúmero de Error: " + CompErr.ErrorNumber +
                    "\nExcepción: ‘" + CompErr.ErrorText + "‘;" +
                    Environment.NewLine + Environment.NewLine);
                }
                //MessageBox.Show("Excepción al compilar: \n" + sbExceptions.ToString());
                return null;
            }
            else
            {
                return results.CompiledAssembly;
            }
        }
    }
}
