# Morse ArCode

Morse ArCode is a throwback to arcade games of the early 80's. Users will play against the clock to enter words of various length and difficulty using their keyboard as a morse code key. The leaderboard is populated with the highest scores and average characters per minute for each round. 

### Technologies 

1. ASP.NET Core MVC Identity
1. SQLite and Entity Framework
1. JQuery
1. Bower
1. Bootstrap 

### Extensions
1. C# for Visual Studio Code (powered by OmniSharp).
2. ASP.NET Core MVC Scaffolding

## Getting Started
If you'd like to pull down a copy of Morse ArCode, here's a few steps to follow.

### Installing
1. Download and install [VS Code](https://code.visualstudio.com/).
1. After installation, click on the Extensions tab and search for / install C# for Visual Studio Code (powered by OmniSharp).
1. Clone and download this repo into a local directory. 
1. Upon startup, in the terminal, run `dotnet ef migrations add InitialCreate` and then `dotnet ef database update` - This will set up the database on your machine.
1. In the terminal , execute `dotnet run` to seed the database with some users. After it is successful, hit `Ctrl + c` to stop the application.
1. Now, inside of VS Code, press `Ctrl + F5` to run the application.
1. If at any point you wish to view the database, download [DB browser for SQLite](http://sqlitebrowser.org/). Once downloaded, click on the Open Database tab and search for the MorseArCode.db file. It will be located inside of bin/Debug/netcoreapp1.1


## How To Play 

1. Once you have the application up and running, register an account.
2. Click the Play Now tab in the navigation bar.
3. Once there, you can interact with the game by clicking any key on the keyboard, which represents your morse code key. I prefer to use the spacebar. Notice the "Morse Code Alphabet" at the bottom of the screen.
	* The `.` (or "dit") represents a quick tap on the keyboard (one unit). 
	* The `-` (or "dah") represents a slightly longer keypress (three units).
	* Proper space (three units) must be given between individual letters in order to differentiate one from another. 
	* The game will allow you to start typing in letters before you select a difficulty level or hit the start button, if you would like some practice.
	* Once ready, follow the prompts on the screen and race against the clock the get the highest score and fastest character per minute speed on the leaderboard! 

## Credits
1. [Pankaj Patel](https://github.com/pankajpatel) shared a gist called, ["Decoding Morse Code With JavaScrpt"](https://gist.github.com/pankajpatel/cad21b36b236f21c4009), which served as an extremely helpful starting point for this project
2. Thank you [Steve Brownlee](https://github.com/stevebrownlee), [Hannah Hall](https://github.com/hannahhall), and [Meg Ducharme](https://github.com/megducharme) for their help throughout this project and my time at Nashville Software School.

## Issues
If you come across any bugs or issues, feel free to open up an issue on GitHub, email me at adamreidelbach@gmail.com, or even make a pull request.