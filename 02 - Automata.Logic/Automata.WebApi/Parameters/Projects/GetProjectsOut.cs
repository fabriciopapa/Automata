using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Automata.WebApi.Entities;

namespace Automata.WebApi.Parameters.Projects
{
    public class GetProjectsOut
    {
        public List<Project> Projects { get; set; }
    }
}