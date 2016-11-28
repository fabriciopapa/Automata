using Automata.UIProcess.MethodParameters.Users;
using Automata.WebApi.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Automata.WebApi.Controllers.Users
{
    public class UsersController : ApiController
    {
        public UsersController() { }

        [HttpGet]
        [ActionName("LogIn")]
        public LogInOut LogIn(LogInIn input)
        {
            LogInOut output = new LogInOut();
            output = new Automata.UIProcess.Users.Users().LogIn(input);
            SessionHelper.SignIn(output.User);
            return output;
        }
    }
}