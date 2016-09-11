using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Automata.WebApi.Entities
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }

        public Project() { }

        public Project(int id, string name, string url)
        {
            this.Id = id;
            this.Name = name;
            this.Url = url;
        }
    }
}