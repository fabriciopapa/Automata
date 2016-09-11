using Automata.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.DataAccess.Connectors
{
    public class ProjectsConnector
    {
        private Exception exception;

        public void GetProjects()
        {
            try
            {
                using (AutomataEntities context = new AutomataEntities())
                {
                    if (user.Projects == null)
                        user.Projects = new List<Project>();

                    user.Projects.Add(project);

                    context.Projects.Add(project);
                    context.SaveChanges();
                }
            }
            catch
            {
                exception = new Exception("Ocurrió un error al dar de alta el proyecto.");
            }

            if (exception != null)
                throw exception;
        }
    }
}
