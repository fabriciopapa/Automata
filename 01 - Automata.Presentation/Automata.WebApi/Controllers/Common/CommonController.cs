using Automata.Entities.Common;
using Automata.MethodParameters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Automata.WebApi.Controllers.Common
{
    public class CommonController : ApiController
    {
        public CommonController() { }

        [HttpGet]
        [ActionName("PingServer")]
        public BaseMethodOut PingServer(BaseMethodIn input)
        {
            return new BaseMethodOut
            {
                OperationResult = OperationResult.Success
            };
        }
    }
}