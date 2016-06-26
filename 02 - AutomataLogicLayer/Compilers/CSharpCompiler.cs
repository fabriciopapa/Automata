using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using System.Xml;
using Microsoft.CSharp;

using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using NUnit.Framework;
using Selenium;

namespace AutomataLogicLayer.Compilers
{
    public class CSharpCompiler : ICompiler
    {
        private string[] assemblies = {
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\NUnitTestAdapter.2.0.0\\lib\\nunit.core",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\NUnitTestAdapter.2.0.0\\lib\\nunit.core.interfaces",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\NUnit.3.4.0\\lib\\net45\\nunit.framework",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\NUnitTestAdapter.2.0.0\\lib\\nunit.util",
                                    "System",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\Selenium.WebDriver.PhantomJS.Xplatform.2.45.0.1\\lib\\net40\\WebDriver",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\Selenium.Support.2.53.0\\lib\\net40\\WebDriver.Support",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\Selenium.RC.2.53.0\\lib\\net40\\ThoughtWorks.Selenium.Core"};

        public Assembly Compile(string code)
        {
            //Se agregan las referencias al compilador.
            CompilerParameters compilerParameters = new CompilerParameters();
            compilerParameters.GenerateInMemory = true;
            compilerParameters.GenerateExecutable = false;
            compilerParameters.TreatWarningsAsErrors = false;
            compilerParameters.WarningLevel = 4;
            foreach (string ass in assemblies)
            {
                compilerParameters.ReferencedAssemblies.Add(ass + ".dll");
            }

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
