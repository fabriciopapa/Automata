using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AutomataDataAccessLayer;
using AutomataEntitiesLayer;
using AutomataLogicLayer.Runners;
using AutomataLogicLayer.Compilers;


namespace Tester
{
    class Program
    {
        static string info = "Ejecutando region: {0}";

        static void Main(string[] args)
        {
            //InsertUser();
            Test();
            Console.ReadLine();
        }

        static void InsertUser()
        {
            //AutomataEntitiesLayer.User user = new AutomataEntitiesLayer.User() { UserName = "fabriciop", Password = "Password01", Name = "Fabricio", LastName = "Papa", SecretAnswer = "respuesta", Projects = null, Active = true };
            //try
            //{
            //    new EntitiesConnector().InsertUser(user);
            //    Console.WriteLine("Success!");
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine(ex.Message);
            //}
        }
        static void InsertProject()
        {
            //AutomataEntitiesLayer.User user = new EntitiesConnector().SelectUser("fabriciop", "Password01");
            //AutomataEntitiesLayer.Project project = new AutomataEntitiesLayer.Project() { Name = "Proyecto2", Url = "http://www.prueba.com", Tests = null, Active = true };
            //try
            //{
            //    new EntitiesConnector().InsertProject(user, project);
            //    Console.WriteLine("Éxito!");
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine(ex.Message);
            //}
        }

        static void Test()
        {
            try
            {
                
                new NUnitRunner().prueba();
                
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
