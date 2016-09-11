using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using Automata.WebApi.Parameters.Projects;
using Automata.WebApi.Entities;

namespace Automata.WebApi.Controllers
{
    [RoutePrefix("api/Projects")]
    public class ProjectsController : ApiController
    {
        public ProjectsController() { }

        [HttpGet]
        [Route("GetProjects")]
        public GetProjectsOut GetProjects(GetProjectsIn input)
        {
            List<Project> projects = new List<Project>();
            projects.Add(new Project(1, "Prueba 1", "www.google.com"));
            projects.Add(new Project(2, "Prueba 2", "www.youtube.com"));
            projects.Add(new Project(3, "Prueba 3", "www.facebook.com"));

            return new GetProjectsOut
            {
                Projects = projects
            };
        }
    }
}