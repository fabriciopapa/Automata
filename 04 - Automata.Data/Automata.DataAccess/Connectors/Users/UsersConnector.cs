using Automata.Entities;
using Automata.MethodParameters.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Automata.DataAccess.Connectors.Users
{
    public class UsersConnector
    {
        public LogInOut LogIn(LogInIn input)
        {
            LogInOut output = new LogInOut();
            
            using (AutomataEntities context = new AutomataEntities())
            {
                context.Configuration.ProxyCreationEnabled = false;
                User user = context.Users.SingleOrDefault(u => u.UserName == input.UserName && u.Password == input.Password && u.Active == true);

                if (user != null)
                {
                    output.User = user;
                    output.OperationResult = Entities.Common.OperationResult.Success;
                }
            }
            
            return output;
        }

        public SignInOut SignIn(SignInIn input)
        {
            SignInOut output = new SignInOut();

            using (AutomataEntities context = new AutomataEntities())
            {
                context.Configuration.ProxyCreationEnabled = false;
                User user = context.Users.SingleOrDefault(u => u.UserName == input.UserName);
                if (user != null)
                {
                    user.UserName = input.UserName;
                    user.Password = input.Password;
                    user.Name = input.Name;
                    user.LastName = input.LastName;
                    user.SecretAnswer = input.SecretAnswer;
                    user.Active = true;
                }
                else
                {
                    user = new User();
                    user.UserName = input.UserName;
                    user.Password = input.Password;
                    user.Name = input.Name;
                    user.LastName = input.LastName;
                    user.SecretAnswer = input.SecretAnswer;
                    user.Active = true;
                }

                context.SaveChanges();
                output.OperationResult = Entities.Common.OperationResult.Success;
            }
            
            return output;
        }
    }
}
