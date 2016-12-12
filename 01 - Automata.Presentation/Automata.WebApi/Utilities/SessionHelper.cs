using Automata.Entities;
using Automata.WebApi.Classes;
using System;
using System.Collections.Generic;
using System.IdentityModel.Services;
using System.Linq;
using System.Web;

namespace Automata.WebApi.Utilities
{
    public static class SessionHelper
    {
        public static SessionInformation SessionInformation
        {
            get
            {
                SessionInformation result;

                result = (SessionInformation)HttpContext.Current.Items["SessionInformation"];

                if (result == null)
                {
                    HttpContext.Current.Items["SessionInformation"] = result;
                }

                return result;
            }
            private set
            {
                HttpContext.Current.Items["SessionInformation"] = value;
            }
        }

        public static void SignIn(User user)
        {
            SessionInformation = new SessionInformation
            {
                User = user
            };
        }

        public static void SignOut()
        {
            FederatedAuthentication.SessionAuthenticationModule.SignOut();
        }
    }
}