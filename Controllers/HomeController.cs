using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MorseArCode.Data;
using MorseArCode.Models;
using MorseArCode.Models.UserViewModels;

namespace MorseArCode.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public HomeController(
          UserManager<ApplicationUser> userManager,
          ApplicationDbContext context)
        {
            _userManager = userManager;
            _context = context;
        }

        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);

        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Play()
        {
            ApplicationUser user = await GetCurrentUserAsync();

            var gameView = new InGameViewModel();

            gameView.ApplicationUser = user;

            gameView.HighScore = _context.Users.Max(u => u.Score);

            //pass in the current user
            return View(gameView);
        }

        public IActionResult LeaderBoard()
        {
            //make a list of all users
            var allUsers = _context.Users.ToList();

            //make an instance of the view model
            var leaderBoardView = new UserScoreListViewModel();

            //add all the users
            leaderBoardView.ApplicationUser = allUsers;

            //pass in all the users
            return View(leaderBoardView);
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
