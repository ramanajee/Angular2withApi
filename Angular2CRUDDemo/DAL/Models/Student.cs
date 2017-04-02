using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Angular2CRUDDemo.DAL.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MinLength(5)]
        public string Name { get; set; }
        [Required]
        public int English { get; set; }
        [Required]
        public int Hindi { get; set; }
        [Required]
        public int Maths { get; set; }
        public string Class { get; set; }
        [Required]
        public int Marks { get; set; }
        public string Result { get; set; }
    }
}