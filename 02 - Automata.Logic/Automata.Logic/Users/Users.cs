using Automata.MethodParameters.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.Logic.Users
{
    public class Users
    {
        public LogInOut LogIn(LogInIn input)
        {
            LogInOut result = new LogInOut();
            result = new DataAccess.Connectors.Users.UsersConnector().LogIn(input);
            if (result != null && result.User != null)
                result.OperationResult = Entities.Common.OperationResult.Success;
            return result;
        }

        public SignInOut SignIn(SignInIn input)
        {
            SignInOut result = new SignInOut();
            result = new DataAccess.Connectors.Users.UsersConnector().SignIn(input);
            return result;
        }
    }
}
