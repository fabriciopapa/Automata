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
    
    public partial class Assembly
    {
        public Assembly()
        {
            this.Procedures = new HashSet<Procedure>();
        }
    
        public int PK_Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public bool Public { get; set; }
        public bool Active { get; set; }
    
        public virtual ICollection<Procedure> Procedures { get; set; }
        public virtual User User { get; set; }
    }
}
