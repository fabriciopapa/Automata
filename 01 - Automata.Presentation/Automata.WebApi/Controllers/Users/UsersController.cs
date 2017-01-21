using Automata.Entities.Common;
using Automata.MethodParameters.Users;
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
        public LogInOut LogIn([FromUri]LogInIn input)
        {
            LogInOut output = new LogInOut();
            output = new Automata.UIProcess.Users.Users().LogIn(input);
            SessionHelper.SignIn(output.User);
            return output;
        }

        [HttpGet]
        [ActionName("LogOut")]
        public LogOutOut LogOut([FromUri]LogOutIn input)
        {
            LogOutOut output = new LogOutOut();
            SessionHelper.SignOut();
            output.OperationResult = OperationResult.Success;
            return output;
        }

        [HttpGet]
        [ActionName("SignIn")]
        public SignInOut SignIn([FromUri]SignInIn input)
        {
            SignInOut output = new SignInOut();
            output = new Automata.UIProcess.Users.Users().SignIn(input);
            return output;
        }

        //[HttpGet]
        //[ActionName("GetDashboard")]
        //public GetDashboardOut GetDashboard([FromUri]GetDashboardIn input)
        //{
        //    GetDashboardOut output = new GetDashboardOut();
        //    output = new Automata.UIProcess.Users.Users().SignIn(input);
        //    return output;
        //}
    }
}