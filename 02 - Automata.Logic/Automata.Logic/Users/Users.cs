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
            LogInOut result = new LogInOut() { OperationResult = Entities.Common.OperationResult.Error };
            result = new Logic.Users.Users().LogIn(input);
            if (result != null && result.User != null)
                result.OperationResult = Entities.Common.OperationResult.Success;
            return result;
        }
    }
}
