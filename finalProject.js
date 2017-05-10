//HeuiChan Lim
//Global Object holding
var current = "";
var titleHolder;
var movieInfo = [
                  { "poster": "http://i2.wp.com/bitcast-a-sm.bitgravity.com/slashfilm/wp/wp-content/images/Ant-Man-Poster.jpg",
                    "movieTitle": "Ant-man",
                    "director": "Peyton Reed",
                    "actors":
                              { "actor1": "Chris Evans",
                                "actor2": "Judy Greer",
                                "actor3": "Anthony Mackie" },
                    "releaseDate": "July 17, 2015",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=antman.htm" },
                  { "poster": "http://www.bigmike-productions.com/images/posts/batman-1989/Batman-Poster-04-1989.jpg",
                    "movieTitle": "Batman",
                    "director": "Tim Burton",
                    "actors":
                              { "actor1": "Jack Nicholson",
                                "actor2": "Michael Keaton",
                                "actor3": "Kim Basinger" },
                    "releaseDate": "June 23, 1989",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=batman.htm" },
                  { "poster": "http://www.flickeringmyth.com/wp-content/uploads/2015/11/Captain-America-Civil-War-poster-1.jpg",
                    "movieTitle": "Captain America: Civil War",
                    "director": "Anthony Russo",
                    "actors":
                              { "actor1": "Chris Evans",
                                "actor2": "Robert Downey, Jr.",
                                "actor3": "Scarlett Johansson" },
                    "releaseDate": "May 6, 2016",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=marvel2016.htm" },
                  { "poster": "http://vargucci.files.wordpress.com/2008/04/dark_knight_ver5_xlg.jpg",
                    "movieTitle": "The Dark Knight",
                    "director": "Christopher Nolan",
                    "actors":
                              { "actor1": "Christian Bale",
                                "actor2": "Heath Ledger",
                                "actor3": "Aaron Eckhart" },
                    "releaseDate": "July 18, 2008",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=darkknight.htm" },
                  { "poster": "http://borgdotcom.files.wordpress.com/2014/01/edge-of-tomorrow-2014-movie-poster.jpg",
                    "movieTitle": "Edge of Tomorrow",
                    "director": "Doug Liman",
                    "actors":
                              { "actor1": "Tom Cruise",
                                "actor2": "Emily Blunt",
                                "actor3": "Bill Paxton" },
                    "releaseDate": "June 6, 2015",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=allyouneediskill.htm" },
                  { "poster": "http://www.movieposter.com/posters/archive/main/202/MPW-101227",
                    "movieTitle": "Fantastic Four",
                    "director": "Tim Story",
                    "actors":
                              { "actor1": "Ioan Gruffudd",
                                "actor2": "Jessica Alba",
                                "actor3": "Chris Evans" },
                    "releaseDate": "July 8, 2015",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=fantasticfour.htm" },
                  { "poster": "http://2.bp.blogspot.com/-8u0GaUZpPJ8/UL-kNvR80_I/AAAAAAAAJlQ/GMaYKjKtunA/s1600/gijoertltndmstcpstr.jpg",
                    "movieTitle": "G.I. Joe",
                    "director": "Jon Chu",
                    "actors":
                              { "actor1": "Dwayne Johnson",
                                "actor2": "Channing Tatum",
                                "actor3": "Bruce Willis" },
                    "releaseDate": "March 28, 2013",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=gijoe2.htm" },
                  { "poster": "http://www.movieposter.com/posters/archive/main/66/MPW-33159",
                    "movieTitle": "Hancock",
                    "director": "Peter Berg",
                    "actors":
                              { "actor1": "Will Smith",
                                "actor2": "Charlize Theron",
                                "actor3": "Jason Bateman" },
                    "releaseDate": "July 2, 2008",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=hancock.htm" },
                  { "poster": "http://4.bp.blogspot.com/_U-_MB3ct83I/S6pL1KH_aHI/AAAAAAAAFI4/xAg9nivP8Bs/s1600/hr_iron_man_poster1.jpg",
                    "movieTitle": "Iron man",
                    "director": "Jon Favreau",
                    "actors":
                              { "actor1": "Robert Downey, Jr.",
                                "actor2": "Terrence Howard",
                                "actor3": "Gwyneth Paltrow" },
                    "releaseDate": "May 2, 2008",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=ironman.htm" },
                  { "poster": "http://movieposters.ie/wp-content/uploads/2012/07/the-jackal.jpg",
                    "movieTitle": "The Jackal",
                    "director": "Michael Caton-Jones",
                    "actors":
                              { "actor1": "Jack Black",
                                "actor2": "Richard Gere",
                                "actor3": "Sophie Okonedo" },
                    "releaseDate": "November 14, 1997",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=jackal.htm" },
                  { "poster": "http://2.bp.blogspot.com/-DkuMWJfH9Ws/UMtxDnHQGxI/AAAAAAAAB2I/rhxuJvTGaD4/s1600/Kill+Bill+2003+Vol+1+poster.jpg",
                    "movieTitle": "Kill Bill Vol.1",
                    "director": "Quentin Tarantino",
                    "actors":
                              { "actor1": "Uma Thurman",
                                "actor2": "Lucy Liu",
                                "actor3": "Vivica A. Fox" },
                    "releaseDate": "October 10, 2003",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=killbill.htm" },
                  { "poster": "http://thelowdownunder.com/wp-content/uploads/2016/11/La-La-Land-Poster.jpg",
                    "movieTitle": "La La Land",
                    "director": "Damien Chazelle",
                    "actors":
                              { "actor1": "Ryan Gosling",
                                "actor2": "Ryan Gosling",
                                "actor3": "N/A" },
                    "releaseDate": "December 9, 2016",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=lalaland.htm" },
                  { "poster": "http://www.freemovieposters.net/posters/madagascar_2005_1722_poster.jpg",
                    "movieTitle": "Madagascar",
                    "director": "Eric Darnell",
                    "actors":
                              { "actor1": "Ben Stiller",
                                "actor2": "Chris Rock",
                                "actor3": "David Schwimmer" },
                    "releaseDate": "May 27, 2005",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=madagascar.htm" },
                  { "poster": "http://www.disneypicture.net/data/media/195/National-treasure_poster.jpg",
                    "movieTitle": "National Treasure",
                    "director": "Jon Turteltaub",
                    "actors":
                              { "actor1": "Nicolas Cage",
                                "actor2": "Diane Kruger",
                                "actor3": "Justin Bartha" },
                    "releaseDate": "November 19, 2014",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=nationaltreasure.htm" },
                  { "poster": "http://www.dvdsreleasedates.com/posters/800/O/Oceans-Twelve-movie-poster.jpg",
                    "movieTitle": "Ocean's Twelve",
                    "director": "Steven Soderbergh",
                    "actors":
                              { "actor1": "George Clooney",
                                "actor2": "Brad Pitt",
                                "actor3": "Matt Damon" },
                    "releaseDate": "December 10, 2004",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=oceanstwelve.htm" },
                  { "poster": "http://3.bp.blogspot.com/-cSemtk3fxDQ/UD67DnqdQiI/AAAAAAAAAag/t3z1lZw65HA/s1600/the-passion-of-the-christ-movie-poster.jpg",
                    "movieTitle": "The Passion of the Christ",
                    "director": "Mel Gibson",
                    "actors":
                              { "actor1": "Monica Bellucci",
                                "actor2": "James Caviezel",
                                "actor3": "N/A" },
                    "releaseDate": "February 25, 2004",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=passionofthechrist.htm" },
                  { "poster": "http://www.the007dossier.com/007Dossier/james-bond-007-movie-posters/quantum-of-solace/Quantum%20Of%20Solace%20Poster%203.jpg",
                    "movieTitle": "Quantum of Solace",
                    "director": "Marc Forster",
                    "actors":
                              { "actor1": "Mathieu Amalric",
                                "actor2": "Daniel Craig",
                                "actor3": "Olga Kurylenko" },
                    "releaseDate": "November 14, 2008",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=jamesbond22.htm" },
                  { "poster": "http://www.mygeekconfessions.com/wp-content/uploads/2012/09/Raiders-of-the-Lost-Ark-Movie-Poster.jpg",
                    "movieTitle": "Raiders of the Lost Ark",
                    "director": "Steven Spielberg",
                    "actors":
                              { "actor1": "Harrison Ford",
                                "actor2": "Alfred Molina",
                                "actor3": "N/A" },
                    "releaseDate": "June 12, 1981",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=raidersofthelostark.htm" },
                  { "poster": "http://cdn.designrshub.com/wp-content/uploads/2012/12/swat_movie_poster.jpg",
                    "movieTitle": "S.W.A.T.",
                    "director": " Clark Johnson",
                    "actors":
                              { "actor1": "Colin Farrell",
                                "actor2": "Samuel L. ",
                                "actor3": "Jackson" },
                    "releaseDate": "August 8, 2013",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=swat.htm" },
                  { "poster": "http://www.freemovieposters.net/posters/taken_2008_2110_poster.jpg",
                    "movieTitle": "Taken",
                    "director": "Pierre Morel",
                    "actors":
                              { "actor1": "Liam Neeson",
                                "actor2": "Maggie Grace",
                                "actor3": "Famke Janssen" },
                    "releaseDate": "January 30, 2009",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=taken.htm" },
                  { "poster": "http://www.freemovieposters.net/posters/up_2009_256_poster.jpg",
                    "movieTitle": "Up",
                    "director": "Peter Doctor",
                    "actors":
                              { "actor1": "Edward Asner",
                                "actor2": "Christopher Plummer",
                                "actor3": "John Ratzenberger* " },
                    "releaseDate": "May 29, 2009",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=up.htm" },
                  { "poster": "http://www.dvdsreleasedates.com/posters/800/V/Valentines-Day-movie-poster.jpg",
                    "movieTitle": "Valentine's Day",
                    "director": "Garry Marshall",
                    "actors":
                              { "actor1": "Jessica Alba",
                                "actor2": "Kathy Bates",
                                "actor3": "Jessica Biel" },
                    "releaseDate": "Februry 12, 2010",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=valentinesday.htm" },
                  { "poster": "https://plentyofpopcorn.files.wordpress.com/2014/03/wall-e-poster.jpg",
                    "movieTitle": "Wall-E",
                    "director": "Andrew Stanton",
                    "actors":
                              { "actor1": "Fred Willard",
                                "actor2": "Jeff Garlin",
                                "actor3": "Sigourney Weaver" },
                    "releaseDate": "June 27, 2008",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=wall-e.htm" },
                  { "poster": "http://www.freemovieposters.net/posters/x-men_2000_3030_poster.jpg",
                    "movieTitle": "X-Men",
                    "director": "Bryan Singer",
                    "actors":
                              { "actor1": "Hugh Jackman",
                                "actor2": "Patrick Stewart",
                                "actor3": "Ian McKellen" },
                    "releaseDate": "July 14, 2000",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=xmen.htm" },
                  { "poster": "http://www.movieposter.com/posters/archive/main/88/MPW-44048",
                    "movieTitle": "Yes Man",
                    "director": "Peyton Reed",
                    "actors":
                              { "actor1": "Jim Carrey",
                                "actor2": "Bradley Cooper",
                                "actor3": "Zooey Deschanel" },
                    "releaseDate": "December 19, 2008",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=yesman.htm" },
                  { "poster": "http://image.tmdb.org/t/p/original/duu5ydyEMIIuIOvQNatwmHuTbRm.jpg",
                    "movieTitle": "Zootopia",
                    "director": "Byron Howard",
                    "actors":
                              { "actor1": "Ginnifer Goodwin",
                                "actor2": "Jason Bateman",
                                "actor3": "Idris Elba" },
                    "releaseDate": "March 4, 2016",
                    "moviePage": "http://www.boxofficemojo.com/movies/?id=disney2016.htm" }
                ];
// Function used in listPage.html
// Function that receives the title of selected movie as a parameter,
// then saves it in a cookie to be used in the view.html page
function passMovie(mvTitle) {
  setCookie("mvTitle", mvTitle, 9999);
}

// Function used in listPage.html
// Gets the search value from the user input, then search through the list
// If the target was found, direct the page to the view page
// Else, give out the alert event to the user
function movieSearch() {
  var searchValue = document.getElementById("search").value;
  var i = 0;
  for (; i < movieInfo.length; i++)
  {
    if (searchValue == movieInfo[i].movieTitle)
      break;
  }
  if (i < movieInfo.length && searchValue == movieInfo[i].movieTitle)
  {
    passMovie(searchValue);
    // Open the view page
    window.open("view.html", "_self", false);
    viewResult();
  }
  else
  {
    alert("Sorry! We don't have what you are looking for.");
  }
}

// Function used in view.html
// Function that retrieves movie title from the saved cookie and search through the JSON movie object list
// Once the movie information is found, display the information on the page
function viewResult() {
  var movie = getCookie("mvTitle");
  var i = 0;
  while (movie != movieInfo[i].movieTitle)
  {
    i++;
  }
  document.getElementById("poster").src = movieInfo[i].poster;
  document.getElementById("movieTitle").innerHTML = movieInfo[i].movieTitle;
  document.getElementById("director").innerHTML = movieInfo[i].director;
  // a for-loop for looping through the nested JSON object.
  for ( x in movieInfo[i].actors) {
    var actorlist = document.createElement("li");
    document.getElementById("actors").appendChild(actorlist);
    actorlist.innerHTML = movieInfo[i].actors[x];
  }
  document.getElementById("releaseDate").innerHTML = movieInfo[i].releaseDate;
  var movieSrcPage = document.getElementById("moviePage");
  movieSrcPage.setAttribute("href", movieInfo[i].moviePage);
  movieSrcPage.innerHTML = "Go to Box office mojo: " + movieInfo[i].movieTitle;
}

// Function used in quiz.html
// Randomly generates the number between 0 and movieInfo size,
// then displays the poster for the user to answer the quiz
// User gets x number of attempts, so initialise the attempts in a cookie 
function movieQuiz() {
  var arraySize = movieInfo.length;
  // Generates random number between 0 and arraysize.
  var rand = Math.floor(Math.random() * arraySize); 
  // Take only the last 4 of the string with substr function and save it into the year variable.
  var year = movieInfo[rand].releaseDate.substr(movieInfo[rand].releaseDate.length - 4);
  while (current == year)
  {
     rand = Math.floor(Math.random() * arraySize);
  }
  current = year;
  document.getElementById("poster").src = movieInfo[rand].poster;
  document.getElementById("movieName").innerHTML = movieInfo[rand].movieTitle;
  setCookie("score", 0, 9999); // When the page is load, always initialise the score to 0.
  // When the page is load, always initialise the sttempt to 10.
  // Users have 3 attempts.
  setCookie("attempt", 3, 9999);
  // When loading a page, enable input and button to work. 
  document.getElementById("inputAnswer").disabled = false; 
  document.getElementById("submitBtn").disabled = false;
  // When loading a page, empty the input area.
  document.getElementById("inputAnswer").value = "";
}

// Function used in quiz.html
// When the user submits the answer, check for the correctness and if the user's answer is correct,
// then increase the current score and update the score on the page
// Either the user got the answer right or wrong, decrement the attempts
// When the user uses all attempts, 0, then disable the input and submit button and show the link to the final page
function submitAnswer() {
  var trial = getCookie("attempt");
  // If the user is still has remaining attempts
  if (trial > 1)
  {
    var submittedAnswer = document.getElementById("inputAnswer").value;
    var currentScore = getCookie("score");

    if (submittedAnswer == current)
    {
      currentScore++;
      setCookie("score", currentScore, 9999);
    }
    document.getElementById("displayScore").innerHTML = currentScore + " / 3";
    document.getElementById("inputAnswer").value = "";
    // After answering each quiz, move on to the next quiz.
    var arraySize = movieInfo.length;
    var rand = Math.floor(Math.random() * arraySize); // Generates random number between 0 and arraysize.
    var year = movieInfo[rand].releaseDate.substr(movieInfo[rand].releaseDate.length - 4);
    while (current == year)
    {
       rand = Math.floor(Math.random() * arraySize);
    }
    current = year;
    document.getElementById("poster").src = movieInfo[rand].poster;
    document.getElementById("movieName").innerHTML = movieInfo[rand].movieTitle;
  }
  // else, finish the quiz
  else
  {
    document.getElementById("inputAnswer").disabled = true;
    document.getElementById("submitBtn").disabled = true;
    var toFinalPage = document.createElement("a"); // Create a new anchor attribute.
    var text = document.createTextNode("To Final Page"); //Creating a text node to represent the link.
    toFinalPage.appendChild(text); // Appending the text node to the anchor attribute.
    toFinalPage.setAttribute("href", "finalPage.html");
    var mBody = document.getElementsByClassName("info-section");
    mBody[0].appendChild(toFinalPage); // Append newly created anchor tag to main-body
  }
  trial--;
  setCookie("attempt", trial, 9999);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
