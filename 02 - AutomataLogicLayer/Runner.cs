using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Transactions;
using System.Threading.Tasks;
using System.Xml;
using OpenQA.Selenium;
using Microsoft.CSharp;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NUnit.Core;

namespace AutomataLogicLayer
{
    public class CSharpRunner : IRunner
    {
        private void CompileAndRun(string code)
        {
            using (CSharpCodeProvider codeProvider = new CSharpCodeProvider())
            {
                CompilerParameters compilerParameters = new CompilerParameters();
                compilerParameters.GenerateInMemory = true;
                compilerParameters.GenerateExecutable = false;
                compilerParameters.TreatWarningsAsErrors = false;
                compilerParameters.WarningLevel = 4;
                foreach (string ass in assemblies)
                {
                    compilerParameters.ReferencedAssemblies.Add(ass + ".dll");
                }

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
                }
                else
                {
                    //obtengo la dll.
                    Assembly assembly = results.CompiledAssembly;
                    //asigno la dll al context.
                    TestExecutionContext.CurrentContext.TestPackage = new TestPackage(assembly.GetName().FullName);
                    RemoteTestRunner remoteTestRunner = new RemoteTestRunner();
                    remoteTestRunner.Load(TestExecutionContext.CurrentContext.TestPackage);
                    var treeBuilder = new NamespaceTreeBuilder(new TestAssembly(assembly, assembly.GetName().FullName));
                    treeBuilder.Add(assembly.GetTypes().Where(TestFixtureBuilder.CanBuildFrom).Select(TestFixtureBuilder.BuildFrom).ToList());
                    TestSuite suite = treeBuilder.RootSuite;
                    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓EJECUCION↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
                    suite.Run(new NullListener(), TestFilter.Empty);
                    //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
                    remoteTestRunner.Unload();
                    remoteTestRunner.Dispose();
                }
            }
        }

    }
}
