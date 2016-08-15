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
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;
using NUnit.Core;
//using Selenium;
using OpenQA.Selenium;
using Microsoft.CSharp;

namespace Automata.Logic.Runners
{
    public class NUnitRunner
    {
        private string codestring = @"
            using NUnit.Core;
            using System;
            using System.Threading;
            using NUnit.Framework;
            using Selenium;
            using AutomataEntitiesLayer;
            using AutomataDataAccessLayer;

            namespace SeleniumTests
            {
                [TestFixture]
                public class NewTest
                {
                    private ISelenium selenium;
                    [SetUp]
                    public void SetupTest()
                    {
                        selenium = new DefaultSelenium(""localhost"",4444,""*firefox"",""http://www.google.com"");
                        selenium.Start();
                    }

                    [TearDown]
                    public void TeardownTest()
                    {
                        selenium.Stop();   
                    }

                    [Test]
                    public void TheNewTest()
                    {
                        selenium.Open(""http://www.google.com/"");
                        new EntitiesConnector().InsertUser(null);
                    }
                }
            }";

        private string[] assemblies = {
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\NUnitTestAdapter.2.0.0\\lib\\nunit.core",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\NUnitTestAdapter.2.0.0\\lib\\nunit.core.interfaces",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\02 - AutomataLogicLayer\\bin\\Debug\\nunit.framework",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\NUnitTestAdapter.2.0.0\\lib\\nunit.util",
                                    "System",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\Selenium.WebDriver.PhantomJS.Xplatform.2.45.0.1\\lib\\net40\\WebDriver",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\Selenium.Support.2.53.0\\lib\\net40\\WebDriver.Support",
                                    "C:\\Users\\Papeitor\\Documents\\Automata\\packages\\Selenium.RC.2.53.0\\lib\\net40\\ThoughtWorks.Selenium.Core",
                                    "03 - AutomataDataAccessLayer",
                                    "04 - AutomataEntitiesLayer"};

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

        public void Run(Assembly code)
        {
            //System.Reflection.Assembly de = this.Compile(codestring);

            //SE COMPILÓ EL CODIGO CORRESPONDIENTE AL [TestFixture]. LLEGA COMO UNA DLL. EN EL TEST SE INSTANCIA EL DRIVER
            //QUE SE COMUNICA CON SELENIUM SERVER.

            //TODO: ver como referenciar las dependencias del test.
            //TODO: ver retorno de selenium server.
            //TODO: ver configuraciones dinamicas de test.

            TestExecutionContext.CurrentContext.TestPackage = new TestPackage(code.GetName().FullName);
            RemoteTestRunner remoteTestRunner = new RemoteTestRunner();
            remoteTestRunner.Load(TestExecutionContext.CurrentContext.TestPackage);
            var treeBuilder = new NamespaceTreeBuilder(new TestAssembly(code, code.GetName().FullName));
            treeBuilder.Add(code.GetTypes().Where(TestFixtureBuilder.CanBuildFrom).Select(TestFixtureBuilder.BuildFrom).ToList());
            TestSuite suite = treeBuilder.RootSuite;

            //SE CORRE LOCALMENTE PERO EL TEST HACE REFERENCIA AL SERVER DE SELENIUM.
            suite.Run(new NullListener(), TestFilter.Empty);

            remoteTestRunner.Unload();
            remoteTestRunner.Dispose();
        }

        //public void RunTest(Assembly code, AutomataEntitiesLayer.Model.TestProcedure testProcedure, IWebDriver driver)
        //{
        //    Type type = code.GetExportedTypes().SingleOrDefault(t => t.Name == testProcedure.Procedure.Assembly.Name); 
        //    Object obj = Activator.CreateInstance(type, driver);
        //    MethodInfo method = type.GetMethod(testProcedure.Procedure.Name);
        //    List<object> arrayValues = null;

        //    if (testProcedure.TestParameters.Count > 0)
        //    {
        //        arrayValues = new List<object>();
        //        int pos = -1;
        //        foreach (AutomataEntitiesLayer.Model.TestParameter parameter in testProcedure.TestParameters)
        //        {
        //            pos++;
        //            arrayValues.Add(parameter.Value);
        //        }
        //    }

        //    Invoke(method, arrayValues, obj);
        //}

        private void Invoke(MethodInfo method, List<object> parameters, Object obj)
        {
            try
            {
                method.Invoke(obj, parameters == null ? null : parameters.ToArray());
            }
            catch (NoSuchElementException)
            {
                throw new Exception("No se encontró el elemento.");
            }
            catch (WebDriverTimeoutException)
            {
                throw new Exception("Timeout en el driver.");
            }
            catch (WebDriverException)
            {
                throw new Exception("Error en el driver.");
            }
            catch (TargetInvocationException)
            {
                throw new Exception("Ocurrió un error al invocar el método.");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        //private void Instantiate()

        public void prueba()
        {
            CompileAndRun(codestring);            
        }

        public void CompileAndRun(string code)
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
                }
                else
                {
                    //Obtengo la dll recién compilada.
                    Assembly assembly = results.CompiledAssembly;
                    TestExecutionContext.CurrentContext.TestPackage = new TestPackage(assembly.GetName().FullName);
                    RemoteTestRunner remoteTestRunner = new RemoteTestRunner();
                    remoteTestRunner.Load(TestExecutionContext.CurrentContext.TestPackage);
                    TestAssembly testAssembly = new TestAssembly(assembly, assembly.GetName().FullName);
                    NamespaceTreeBuilder treeBuilder = new NamespaceTreeBuilder(testAssembly);
                    treeBuilder.Add(assembly.GetTypes().Where(TestFixtureBuilder.CanBuildFrom).Select(TestFixtureBuilder.BuildFrom).ToList());
                    TestSuite suite = treeBuilder.RootSuite;
                    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓EJECUCION↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
                    TestResult testResult = suite.Run(new NullListener(), TestFilter.Empty);
                    //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑EJECUCION↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
                    string resultado = testResult.Results.ToString();
                    remoteTestRunner.Unload();
                    remoteTestRunner.Dispose();
                }
            }
        }
    }
}
