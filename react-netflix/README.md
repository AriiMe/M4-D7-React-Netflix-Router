Netflix, React Edition

    Netflix, Navigation


      In this exercise you'll apply your new knowledge about react-router-dom. Remember to install the package from npm
      (npm i react-router-dom).


    Netflix App - Router

      Create a Router to navigate to a ShowDetail component

        Create ShowDetail component that receives from route parameter the ID and fetch all the informations (from omdb
        & comments too)

      Change every Show (Movie or Series) to be clickable and to redirect to the ShowDetail component

        Make it so that every page component receives its title from the App component as a prop and use it in an "h1".



    EXTRA

      Add a Link for TV Shows in the Navbar to navigate to a TV Shows component that you create.

        Pass a route parameter named "series" with the TV Shows component route and use it for querying APIs like:
        ?s={series}&type={series}.

      Display results accordingly
      Link every show in the result with the detail page
      Add loaders / empty states


      _______________________________________________________________________________________

        API INFO:

        Register to http://www.omdbapi.com/

        Once registered, you'll receive via email an api key.
        The API has a detail method:

        http://www.omdbapi.com/?apikey=[YOUR API KEY]&i=tt0241527

        That gives you extra info about a movie:

        {
            "Title": "Harry Potter and the Sorcerer's Stone",
            "Year": "2001",
            "Rated": "PG",
            "Released": "16 Nov 2001",
            "Runtime": "152 min",
            "Genre": "Adventure, Family, Fantasy",
            "Director": "Chris Columbus",
            "Writer": "J.K. Rowling (novel), Steve Kloves (screenplay)",
            "Actors": "Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets",
            "Plot": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
            "Language": "English",
            "Country": "UK, USA",
            "Awards": "Nominated for 3 Oscars. Another 17 wins & 62 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "81%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "64/100"
                }
            ],
            "Metascore": "64",
            "imdbRating": "7.6",
            "imdbVotes": "572,463",
            "imdbID": "tt0241527",
            "Type": "movie",
            "DVD": "28 May 2002",
            "BoxOffice": "$317,557,891",
            "Production": "Warner Bros. Pictures",
            "Website": "http://movies.warnerbros.com/awards/harry.html",
            "Response": "True"
        }

        You have a CRUD endpoint for comments on:

        https://striveschool-api.herokuapp.com/api/comments/

        This means you can GET, DELETE, POST, PUT data from there.

        The Comment structure is this:

        {
          "comment": "A good movie but definitely I don't like many parts of the plot",
          "rate": 3,
          "elementId": "tt1756545"
        }

        Where:
        - comment is the comment inserted by the user
        - rate is a value between 1 and 5
        - elementId is the imdbID of the movie / serie
