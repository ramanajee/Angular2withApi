using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Configuration;
using Angular2CRUDDemo.DAL.Models;

namespace Angular2CRUDDemo.DAL
{
    public class StudentDbContext:DbContext
    {
        public StudentDbContext():base("Student.Db.Connetion.String")
        {

        }
        public IDbSet<Student> Students { get; set; }
    }
}