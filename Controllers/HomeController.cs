﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        public async Task<IActionResult> Index()
        {
            ApplicationUser user = await GetCurrentUserAsync();

            var gameView = new InGameViewModel();

            gameView.ApplicationUser = user;

            try 
            {
                gameView.Score = user.Score;
            } 
            catch {
                gameView.Score = 0;
            }

            var allUsers = _context.Users.ToList();

            gameView.HighScore = allUsers.Max(u => u.Score);

            //pass in the current user
            return View(gameView);
        }

        public IActionResult HowToPlay()
        {
            return View();
        }

        [Authorize]
        public async Task<IActionResult> Play()
        {
            ApplicationUser user = await GetCurrentUserAsync();

            var gameView = new InGameViewModel();

            gameView.ApplicationUser = user;

            gameView.Score = user.Score;

            var allUsers = _context.Users.ToList();

            gameView.HighScore = allUsers.Max(u => u.Score);

            //pass in the current user
            return View(gameView);
        }

        public IActionResult LeaderBoard()
        {
            //make a list of all users
            var allUsers = _context.Users.Include(u => u.UserCPM).ToList();

            //make an instance of the view model
            var leaderBoardView = new UserScoreListViewModel();

            //add all the users
            leaderBoardView.ApplicationUser = allUsers;

            //pass in all the users
            return View(leaderBoardView);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
