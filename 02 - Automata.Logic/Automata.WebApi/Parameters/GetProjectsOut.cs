using Automata.WebApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Automata.WebApi.Parameters
{
    public class GetProjectsOut
    {
        public List<Project> Projects { get; set; }
    }
}