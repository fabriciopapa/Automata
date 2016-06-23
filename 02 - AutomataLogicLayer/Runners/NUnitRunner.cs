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

namespace AutomataLogicLayer.Runners
{
    public class NUnitRunner : IRunner
    {
        public void Run(Assembly code)
        {
            TestExecutionContext.CurrentContext.TestPackage = new TestPackage(code.GetName().FullName);
            RemoteTestRunner remoteTestRunner = new RemoteTestRunner();
            remoteTestRunner.Load(TestExecutionContext.CurrentContext.TestPackage);
            var treeBuilder = new NamespaceTreeBuilder(new TestAssembly(code, code.GetName().FullName));
            treeBuilder.Add(code.GetTypes().Where(TestFixtureBuilder.CanBuildFrom).Select(TestFixtureBuilder.BuildFrom).ToList());
            TestSuite suite = treeBuilder.RootSuite;

            suite.Run(new NullListener(), TestFilter.Empty);

            remoteTestRunner.Unload();
            remoteTestRunner.Dispose();

            IWebDriver driver = new OpenQA.Selenium.Remote.RemoteWebDriver(new Uri("http://localhost:4444/wd/hub"), new DesiredCapabilities());
            ((OpenQA.Selenium.Remote.RemoteWebDriver)driver).Navigate().GoToUrl("http://www.google.com");
        }
    }
}
