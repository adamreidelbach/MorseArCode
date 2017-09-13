using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MorseArCode.Data;
using MorseArCode.Models;

namespace MorseArCode.Controllers
{
    public class GameController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly string _externalCookieScheme;

        public GameController(
          UserManager<ApplicationUser> userManager,
          IOptions<IdentityCookieOptions> identityCookieOptions,
          ApplicationDbContext context)
        {
            _userManager = userManager;
            _externalCookieScheme = identityCookieOptions.Value.ExternalCookieAuthenticationScheme;
            _context = context;
        }

        private Task<ApplicationUser> GetCurrentUserAsync() => _userManager.GetUserAsync(HttpContext.User);

        // GET
        [HttpGet]
        public string GetUserScore()
        {
            var user = GetCurrentUserAsync();
            string userScore = _context.Users.Select(u => u.Score).FirstOrDefault();
            return userScore;
        }

        // POST
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditUserScore(string Score)
        {
            var player = await GetCurrentUserAsync();
            player.Score = Score;

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(player);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PlayerExists(player.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            //Redirect to Home/Play
            return RedirectToAction("Play", "Home");
        }

        private bool PlayerExists(string id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
