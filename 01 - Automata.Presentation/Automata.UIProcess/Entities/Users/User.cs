﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.UIProcess.Entities.Users
{
    public class User
    {
        public int PK_Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string SecretAnswer { get; set; }
        public bool Active { get; set; }
    }
}
