//HeuiChan Lim
//Global Object holding
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
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=batman.htm" },
                  { "poster": "http://cdn1.sciencefiction.com/wp-content/uploads/2016/04/Captain-America-Civil-War-Key-Art.jpg",
                    "movieTitle": "Captain America: Civil War",
                    "director": "Anthony Russo",
                    "actors":
                              { "actor1": "Chris Evans",
                                "actor2": "Robert Downey, Jr.",
                                "actor3": "Scarlett Johansson" },
                    "releaseDate": "May 6, 2016",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=marvel2016.htm" },
                  { "poster": "http://vargucci.files.wordpress.com/2008/04/dark_knight_ver5_xlg.jpg",
                    "movieTitle": "The Dark Knight",
                    "director": "Christopher Nolan",
                    "actors":
                              { "actor1": "Christian Bale",
                                "actor2": "Heath Ledger",
                                "actor3": "Aaron Eckhart" },
                    "releaseDate": "July 18, 2008",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=darkknight.htm" },
                  { "poster": "http://borgdotcom.files.wordpress.com/2014/01/edge-of-tomorrow-2014-movie-poster.jpg",
                    "movieTitle": "Edge of Tomorrow",
                    "director": "Doug Liman",
                    "actors":
                              { "actor1": "Tom Cruise",
                                "actor2": "Emily Blunt",
                                "actor3": "Bill Paxton" },
                    "releaseDate": "June 6, 2014",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=allyouneediskill.htm" },
                  { "poster": "http://www.movieposter.com/posters/archive/main/202/MPW-101227",
                    "movieTitle": "Fantastic Four",
                    "director": "Tim Story",
                    "actors":
                              { "actor1": "Ioan Gruffudd",
                                "actor2": "Jessica Alba",
                                "actor3": "Chris Evans" },
                    "releaseDate": "July 8, 2005",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=fantasticfour.htm" },
                  { "poster": "http://2.bp.blogspot.com/-8u0GaUZpPJ8/UL-kNvR80_I/AAAAAAAAJlQ/GMaYKjKtunA/s1600/gijoertltndmstcpstr.jpg",
                    "movieTitle": "G.I. Joe",
                    "director": "Jon Chu",
                    "actors":
                              { "actor1": "Dwayne Johnson",
                                "actor2": "Channing Tatum",
                                "actor3": "Bruce Willis" },
                    "releaseDate": "March 28, 2013",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=gijoe2.htm" },
                  { "poster": "http://www.movieposter.com/posters/archive/main/66/MPW-33159",
                    "movieTitle": "Hancock",
                    "director": "Peter Berg",
                    "actors":
                              { "actor1": "Will Smith",
                                "actor2": "Charlize Theron",
                                "actor3": "Jason Bateman" },
                    "releaseDate": "July 2, 2008",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=hancock.htm" },
                  { "poster": "http://4.bp.blogspot.com/_U-_MB3ct83I/S6pL1KH_aHI/AAAAAAAAFI4/xAg9nivP8Bs/s1600/hr_iron_man_poster1.jpg",
                    "movieTitle": "Iron man",
                    "director": "Jon Favreau",
                    "actors":
                              { "actor1": "Robert Downey, Jr.",
                                "actor2": "Terrence Howard",
                                "actor3": "Gwyneth Paltrow" },
                    "releaseDate": "May 2, 2008",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=ironman.htm" },
                  { "poster": "http://movieposters.ie/wp-content/uploads/2012/07/the-jackal.jpg",
                    "movieTitle": "The Jackal",
                    "director": "Michael Caton-Jones",
                    "actors":
                              { "actor1": "Jack Black",
                                "actor2": "Richard Gere",
                                "actor3": "Sophie Okonedo" },
                    "releaseDate": "November 14, 1997",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=jackal.htm" },
                  { "poster": "http://2.bp.blogspot.com/-DkuMWJfH9Ws/UMtxDnHQGxI/AAAAAAAAB2I/rhxuJvTGaD4/s1600/Kill+Bill+2003+Vol+1+poster.jpg",
                    "movieTitle": "Kill Bill Vol.1",
                    "director": "Quentin Tarantino",
                    "actors":
                              { "actor1": "Uma Thurman",
                                "actor2": "Lucy Liu",
                                "actor3": "Vivica A. Fox" },
                    "releaseDate": "October 10, 2003",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=killbill.htm" },
                  { "poster": "http://thelowdownunder.com/wp-content/uploads/2016/11/La-La-Land-Poster.jpg",
                    "movieTitle": "La La Land",
                    "director": "Damien Chazelle",
                    "actors":
                              { "actor1": "Ryan Gosling",
                                "actor2": "Ryan Gosling",
                                "actor3": "N/A" },
                    "releaseDate": "December 9, 20016",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=lalaland.htm" },
                  { "poster": "http://www.freemovieposters.net/posters/madagascar_2005_1722_poster.jpg",
                    "movieTitle": "Madagascar",
                    "director": "Eric Darnell",
                    "actors":
                              { "actor1": "Ben Stiller",
                                "actor2": "Chris Rock",
                                "actor3": "David Schwimmer" },
                    "releaseDate": "May 27, 2005",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=madagascar.htm" },
                  { "poster": "http://www.disneypicture.net/data/media/195/National-treasure_poster.jpg",
                    "movieTitle": "National Treasure",
                    "director": "Jon Turteltaub",
                    "actors":
                              { "actor1": "Nicolas Cage",
                                "actor2": "Diane Kruger",
                                "actor3": "Justin Bartha" },
                    "releaseDate": "November 19, 2014",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=nationaltreasure.htm" },
                  { "poster": "http://www.dvdsreleasedates.com/posters/800/O/Oceans-Twelve-movie-poster.jpg",
                    "movieTitle": "Ocean's Twelve",
                    "director": "Steven Soderbergh",
                    "actors":
                              { "actor1": "George Clooney",
                                "actor2": "Brad Pitt",
                                "actor3": "Matt Damon" },
                    "releaseDate": "December 10, 2004",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=oceanstwelve.htm" },
                  { "poster": "http://3.bp.blogspot.com/-cSemtk3fxDQ/UD67DnqdQiI/AAAAAAAAAag/t3z1lZw65HA/s1600/the-passion-of-the-christ-movie-poster.jpg",
                    "movieTitle": "The Passion of the Christ",
                    "director": "Mel Gibson",
                    "actors":
                              { "actor1": "Monica Bellucci",
                                "actor2": "James Caviezel",
                                "actor3": "N/A" },
                    "releaseDate": "February 25, 2004",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=passionofthechrist.htm" },
                  { "poster": "http://www.the007dossier.com/007Dossier/james-bond-007-movie-posters/quantum-of-solace/Quantum%20Of%20Solace%20Poster%203.jpg",
                    "movieTitle": "Quantum of Solace",
                    "director": "Marc Forster",
                    "actors":
                              { "actor1": "Mathieu Amalric",
                                "actor2": "Daniel Craig",
                                "actor3": "Olga Kurylenko" },
                    "releaseDate": "November 14, 2008",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=jamesbond22.htm" },
                  { "poster": "http://www.mygeekconfessions.com/wp-content/uploads/2012/09/Raiders-of-the-Lost-Ark-Movie-Poster.jpg",
                    "movieTitle": "Raiders of the Lost Ark",
                    "director": "Steven Spielberg",
                    "actors":
                              { "actor1": "Harrison Ford",
                                "actor2": "Alfred Molina",
                                "actor3": "N/A" },
                    "releaseDate": "June 12, 1981",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=raidersofthelostark.htm" },
                  { "poster": "http://cdn.designrshub.com/wp-content/uploads/2012/12/swat_movie_poster.jpg",
                    "movieTitle": "S.W.A.T.",
                    "director": " Clark Johnson",
                    "actors":
                              { "actor1": "Colin Farrell",
                                "actor2": "Samuel L. ",
                                "actor3": "Jackson" },
                    "releaseDate": "August 8, 2013",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=swat.htm" },
                  { "poster": "http://www.freemovieposters.net/posters/taken_2008_2110_poster.jpg",
                    "movieTitle": "Taken",
                    "director": "Pierre Morel",
                    "actors":
                              { "actor1": "Liam Neeson",
                                "actor2": "Maggie Grace",
                                "actor3": "Famke Janssen" },
                    "releaseDate": "January 30, 2009",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=taken.htm" },
                  { "poster": "https://tse2.mm.bing.net/th?id=OIP.Br0pwOtq5iQTd9m9qv_FYADMEy&pid=15.1",
                    "movieTitle": "Up",
                    "director": "Peter Doctor",
                    "actors":
                              { "actor1": "Edward Asner",
                                "actor2": "Christopher Plummer",
                                "actor3": "John Ratzenberger* " },
                    "releaseDate": "May 29, 2009",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=up.htm" },
                  { "poster": "http://www.dvdsreleasedates.com/posters/800/V/Valentines-Day-movie-poster.jpg",
                    "movieTitle": "Valentine's Day",
                    "director": "Garry Marshall",
                    "actors":
                              { "actor1": "Jessica Alba",
                                "actor2": "Kathy Bates",
                                "actor3": "Jessica Biel" },
                    "releaseDate": "Februry 12, 2010",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=valentinesday.htm" },
                  { "poster": "https://plentyofpopcorn.files.wordpress.com/2014/03/wall-e-poster.jpg",
                    "movieTitle": "Wall-E",
                    "director": "Andrew Stanton",
                    "actors":
                              { "actor1": "Fred Willard",
                                "actor2": "Jeff Garlin",
                                "actor3": "Sigourney Weaver" },
                    "releaseDate": "June 27, 2008",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=wall-e.htm" },
                  { "poster": "http://www.freemovieposters.net/posters/x-men_2000_3030_poster.jpg",
                    "movieTitle": "X-Men",
                    "director": "Bryan Singer",
                    "actors":
                              { "actor1": "Hugh Jackman",
                                "actor2": "Patrick Stewart",
                                "actor3": "Ian McKellen" },
                    "releaseDate": "July 14,2000",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=xmen.htm" },
                  { "poster": "http://www.movieposter.com/posters/archive/main/88/MPW-44048",
                    "movieTitle": "Yes Man",
                    "director": "Peyton Reed",
                    "actors":
                              { "actor1": "Jim Carrey",
                                "actor2": "Bradley Cooper",
                                "actor3": "Zooey Deschanel" },
                    "releaseDate": "December 19, 2008",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=yesman.htm" },
                  { "poster": "http://image.tmdb.org/t/p/original/duu5ydyEMIIuIOvQNatwmHuTbRm.jpg",
                    "movieTitle": "Zootopia",
                    "director": "Byron Howard",
                    "actors":
                              { "actor1": "Ginnifer Goodwin",
                                "actor2": "Jason Bateman",
                                "actor3": "Idris Elba" },
                    "releaseDate": "March 4, 2016",
                    "MoviePage": "http://www.boxofficemojo.com/movies/?id=disney2016.htm" }
                ];

function passMovie(title) {
  //setCookie("title", Title, 9999);
  //console.log(Title);
  titleHolder = title;
  console.log(titleHolder);
}

function viewResult() {
  //var movie = getCookie("title");
  //console.log(movie);
  console.log(typeof titleHolder);
  var i = 0;
  while (titleHolder != movieInfo[i].movieTitle)
  {
    i++;
  }
  document.getElementById("poster").src = movieInfo[i].picture;
  document.getElementById("movieTitle").innerHTML = movieInfo[i].movieTitle;
  document.getElementById("director").innerHTML = movieInfo[i].director;
  // a for-loop for looping through the nested JSON object.
  for ( x in movieInfo[i].actors) {
    var actorlist = document.createElement("li");
    document.getElementById("t").appendChild(actorlist);
    actorlist.innerHTML = movieInfo[i].actors[x];
  }
  document.getElementByIv("releaseDate").innerHTML = movieInfo[i].releaseDate;
  document.getElementByIv("moviePage").innerHTML = movieInfo[i].moviePage;
  console.log("working");
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
