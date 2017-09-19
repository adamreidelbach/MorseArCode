using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace MorseArCode.Models
{
    public class UserCPM
    {
        [Key]
        public int UserCPMId { get; set; }
        
        public ApplicationUser User { get; set; }

        public decimal CPM { get; set; }
    }
}
