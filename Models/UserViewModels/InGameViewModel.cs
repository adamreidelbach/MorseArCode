using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace MorseArCode.Models.UserViewModels
{
    public class InGameViewModel
    {
        public ApplicationUser ApplicationUser { get; set; }

        public double HighScore { get; set; }

        public double Score { get; set; }
    }
}
