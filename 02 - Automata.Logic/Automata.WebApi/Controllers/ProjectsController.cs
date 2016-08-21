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

namespace Automata.WebApi.Controllers
{
    [RoutePrefix("api/Projects")]
    public class ProjectsController : ApiController
    {
        public ProjectsController() { }

        [Route("GetProjects")]
        public GetProjectsOut GetProjects(GetProjectsIn input)
        {
            return new GetProjectsOut
            {
                Email = "eaea",
                HasRegistered = true,
                LoginProvider = "eaea"
            };
        }
    }
}