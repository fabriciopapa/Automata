using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutomataEntitiesLayer.Model;
using System.Data.Entity;

namespace AutomataDataAccessLayer
{
    public class EntitiesConnector
    {
        private Exception exception;

        #region SELECT
        public User SelectUser(string userName, string password)
        {
            User user = null;
            
            try
            {
                using (AutomataEntities context = new AutomataEntities())
                {
                    user = context.Users.Where(u => u.UserName == userName && u.Password == password).Select(u => u).FirstOrDefault();
                    if (user == null)
                    {
                        exception = new Exception("Ingrese correctamente los datos del usuario.");
                    }
                }
            }
            catch
            {
                exception = new Exception("Ocurrió un error al realizar login.");
            }

            if (exception != null)
                throw exception;

            return user;
        }
        #endregion

        #region INSERT
        public void InsertUser(User user)
        {
            try
            {
                using (AutomataEntities context = new AutomataEntities())
                {
                    User dbUser = context.Users.Where(u => u.UserName == user.UserName).Select(u => u).FirstOrDefault();
                    if (dbUser == null)
                    {
                        context.Users.Add(user);
                        context.SaveChanges();
                    }
                    else
                    {
                        exception = new Exception("Ya existe un usuario con los datos provistos.");
                    }
                }
            }
            catch
            {
                exception = new Exception("Ocurrió un error al dar de alta el usuario.");
            }

            if (exception != null)
                throw exception;
        }
        public void InsertProject(User user, Project project)
        {
            try
            {
                
                using (AutomataEntities context = new AutomataEntities())
                {                   
                    if (user.Projects == null)
                        user.Projects = new List<Project>();
                    
                    user.Projects.Add(project);

                    context.Projects.Add(project);
                    context.SaveChanges();
                }
            }
            catch
            {
                exception = new Exception("Ocurrió un error al dar de alta el proyecto.");
            }

            if (exception != null)
                throw exception;
        }
        #endregion
    }
}
