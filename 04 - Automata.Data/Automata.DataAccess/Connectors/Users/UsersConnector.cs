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
                if (user != null && user.Active == false)
                {
                    user.UserName = input.UserName;
                    user.Password = input.Password;
                    user.Name = input.Name;
                    user.LastName = input.LastName;
                    user.SecretAnswer = input.SecretAnswer;
                    user.Active = true;
                    output.OperationResult = Entities.Common.OperationResult.PartialSuccess;
                }
                else if (user != null && user.Active == true) {
                    output.OperationResult = Entities.Common.OperationResult.Error;
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
                    context.Users.Add(user);
                    output.OperationResult = Entities.Common.OperationResult.PartialSuccess;
                }

                if (output.OperationResult == Entities.Common.OperationResult.PartialSuccess)
                {
                    context.SaveChanges();
                    output.OperationResult = Entities.Common.OperationResult.Success;
                }
                else
                {
                    output.OperationResult = Entities.Common.OperationResult.Error;
                }
            }
            
            return output;
        }

        public GetDashboardOut GetDashboard(GetDashboardIn input)
        {
            GetDashboardOut output = new GetDashboardOut();

            using (AutomataEntities context = new AutomataEntities())
            {
                context.Configuration.ProxyCreationEnabled = false;
                User user = context.Users
                    .Include("Projects")
                    .Include("Projects.Tests")
                    .Include("Assemblies")
                    .Include("Assemblies.Procedures")
                    .SingleOrDefault(u => u.PK_Id == input.UserId);

                if (user != null)
                {
                    output.ProjectsCount = user.Projects.Count;
                    foreach(Project p in user.Projects)
                    {
                        output.TestsCount += p.Tests.Count;
                    }
                    output.PagesCount = user.Assemblies.Count;
                    foreach(Assembly a in user.Assemblies)
                    {
                        output.MethodsCount += a.Procedures.Count;
                    }
                    output.OperationResult = Entities.Common.OperationResult.Success;
                }
            }

            return output;
        }
    }
}
