using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace MorseArCode.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ComputerUser
    {
        [Required]
        public string Name { get; set; }
        
        public double Score { get; set; }

        public int CPM { get; set; }
    }
}
