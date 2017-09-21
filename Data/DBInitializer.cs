using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MorseArCode.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

// This file written by Mitchell.
// Comments above each section label what is being seeded.

namespace MorseArCode.Data
{
    public static class DbInitializer
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ApplicationDbContext(serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
            {
                if (context.Users.Any())
                {
                    return;
                }

                //seeding Users
                var seederUsers = new ApplicationUser[]
                {
                    new ApplicationUser { 
                        Name = "Ron Swanson",
                        Score = 6000,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 16 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "Leslie Knope",
                        Score = 5000,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 17 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "Tom Haverford",
                        Score = 2000,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 8 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "Donna Meagle",
                        Score = 4500,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 15 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "Jerry Gergich",
                        Score = 3500,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 13 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "Chris Traeger",
                        Score = 4000,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 14 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "Ann Perkins",
                        Score = 4000,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 15 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "Andy Dwyer",
                        Score = 500,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 10 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "April Ludgate",
                        Score = 2500,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 14 }
                        }
                    },
                    new ApplicationUser { 
                        Name = "Ben Wyatt",
                        Score = 4500,
                        UserCPM = new List<UserCPM> {
                            new UserCPM { CPM = 13 }
                        }
                    }
                };

                foreach (ApplicationUser u in seederUsers)
                {
                    context.ApplicationUser.Add(u);
                }
                context.SaveChanges();

                //seeding Words - Difficulty 1
                var seederWords1 = new WordBank[]
                {
                    new WordBank { 
                        Word = "GIT",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "DOG",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "BUS",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "INT",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "WHO",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "SOY",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "CAT",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "PIT",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "FLY",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "ELF",
                        Difficulty = 1
                    },
                    new WordBank { 
                        Word = "SPY",
                        Difficulty = 1
                    },
                };

                foreach (WordBank w in seederWords1)
                {
                    context.WordBank.Add(w);
                }
                context.SaveChanges();

                //seeding Words - Difficulty 2
                var seederWords2 = new WordBank[]
                {
                    new WordBank { 
                        Word = "FIZZ",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "BUZZ",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "JUMP",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "DOJO",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "QUIZ",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "HACK",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "AQUA",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "EXPO",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "JOIN",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "CART",
                        Difficulty = 2
                    },
                    new WordBank { 
                        Word = "FLIP",
                        Difficulty = 2
                    },
                };

                foreach (WordBank w in seederWords2)
                {
                    context.WordBank.Add(w);
                }
                context.SaveChanges();

                //seeding Words - Difficulty 3
                var seederWords3 = new WordBank[]
                {
                    new WordBank { 
                        Word = "SPLIT",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "PIZZA",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "QUICK",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "JUMBO",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "WALTZ",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "BANJO",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "JAPAN",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "JUDGE",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "PRIZE",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "PICKY",
                        Difficulty = 3
                    },
                    new WordBank { 
                        Word = "QUERY",
                        Difficulty = 3
                    },
                };

                foreach (WordBank w in seederWords3)
                {
                    context.WordBank.Add(w);
                }
                context.SaveChanges();

            }
       }
    }
}