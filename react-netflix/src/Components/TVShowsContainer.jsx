import React from "react";
import { Container } from "react-bootstrap";

import MovieCard from "./MovieCard";

class TVShowsContainer extends React.Component {
  state = {
    tvShows: [],
  };

  fetchTVSeries = async (searchterm) => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=925b91e7&s=${searchterm}`);
      let data = await response.json();
      this.setState({ tvShows: data.Search.filter((e) => e.Poster !== "N/A") });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.fetchTVSeries("spongebob");
  };

  render() {
    console.log(this.state.tvShows);
    return (
      <>
        <Container className="pt-5">
          <div className="pt-5">
            <h1 className="mb-5">TV Shows</h1>
          </div>
        </Container>
        <div className="container-fluid">
          <h3>Spongebob Squarepants</h3>
          <div className="mb-4 shows-row rounded">
            {this.state.tvShows.length > 0 &&
              this.state.tvShows.map((e, index) => (
                <MovieCard key={index} movieId={e.imdbID} title={e.Title} description={e.Plot} image={e.Poster} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default TVShowsContainer;
