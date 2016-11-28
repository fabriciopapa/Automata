using Automata.Entities;
using Automata.MethodParameters.Projects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.Logic.Projects
{
    public class ProjectsLogic
    {
        public GetProjectsOut GetProjects(GetProjectsIn input)
        {
            List<Project> projects = new List<Project>();
            projects.Add(new Project() { Active = true, Name = "Prueba 1", PK_Id = 1, Tests = null, Url = "www.youtube.com", User = null});

            return new GetProjectsOut
            {
                Projects = projects
            };
        }
    }
}
