using Automata.Entities;
using Automata.MethodParameters.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.DataAccess.Connectors.Users
{
    class UsersConnector
    {
        public LogInOut LogIn(LogInIn input)
        {
            LogInOut output = new LogInOut() { OperationResult = Entities.Common.OperationResult.Error };
            
            using (AutomataEntities context = new AutomataEntities())
            {
                User user = context.Users.SingleOrDefault(u => u.UserName == input.UserName && u.Password == input.Password);

                if (user != null)
                    output.User = user;
            }

            output.OperationResult = Entities.Common.OperationResult.PartialSuccess;
            return output;
        }
    }
}
