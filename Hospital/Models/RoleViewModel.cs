using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Hospital.Models;
namespace holaHola.Models
{
    public class RoleViewModel
    {
        public RoleViewModel() { }
        public RoleViewModel(ApplicationRole role)
        {
            id = role.Id;
            Name = role.Name;
        }
        public String id { get; set; }
        public String Name { get; set; }
    }
}