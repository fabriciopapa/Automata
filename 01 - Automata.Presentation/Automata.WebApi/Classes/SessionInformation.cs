using Automata.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Automata.WebApi.Classes
{
    public class SessionInformation
    {
        public User User { get; set; }

        public int UserId
        {
            get
            {
                return User != null ? User.PK_Id : -1;
            }
        }

        public string UserName
        {
            get
            {
                return User != null ? User.UserName : string.Empty;
            }
        }
    }
}