//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Automata.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class ParameterType
    {
        public ParameterType()
        {
            this.Parameters = new HashSet<Parameter>();
        }
    
        public string PK_Type { get; set; }
    
        public virtual ICollection<Parameter> Parameters { get; set; }
    }
}
