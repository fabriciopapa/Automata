using Automata.UIProcess.Entities.Users;
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
                return User != null ? User.UserId : -1;
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