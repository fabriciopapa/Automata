﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Automata.WebApi.Parameters.Projects
{
    public class GetProjectsOut
    {
        public string Email { get; set; }

        public bool HasRegistered { get; set; }

        public string LoginProvider { get; set; }
    }
}