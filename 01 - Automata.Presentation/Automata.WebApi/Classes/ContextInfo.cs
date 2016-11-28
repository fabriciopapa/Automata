using Automata.WebApi.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Automata.WebApi.Classes
{
    public class ContextInfo : Automata.UIProcess.Entities.Common.ContextInfo
    {
        public ContextInfo()
        {
            SessionInformation sessionInformation = SessionHelper.SessionInformation;

            UserAgent = HttpContext.Current.Request.UserAgent;
            IpAddress = HttpContext.Current.Request.UserHostAddress;

            if (sessionInformation != null)
            {
                UserId = sessionInformation.UserId;
                UserName = sessionInformation.UserName;
            }
            else
            {
                UserId = -1;
                UserName = string.Empty;
            }
        }
    }
}