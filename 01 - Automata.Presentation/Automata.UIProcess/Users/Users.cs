using Automata.Entities.Common;
using Automata.MethodParameters.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.UIProcess.Users
{
    public class Users
    {
        public LogInOut LogIn(LogInIn input)
        {
            LogInOut output = new LogInOut();
            output = new Logic.Users.Users().LogIn(input);
            return output;
        }

        public SignInOut SignIn(SignInIn input)
        {
            SignInOut output = new SignInOut();
            output = new Logic.Users.Users().SignIn(input);
            return output;
        }
    }
}
