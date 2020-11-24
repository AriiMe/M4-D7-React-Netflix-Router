import React from "react";
import { Container } from "react-bootstrap";
import MovieRow from "./MovieRow";

class MoviesContainer extends React.Component {
  state = {
    trendingMovies: [
      "tt7286456",
      "tt6751668",
      "tt4520988",
      "tt3794354",
      "tt0241527",
      "tt0330373",
      "tt1270797",
      "tt1825683",
      "tt6105098",
      "tt1477834",
    ],
    newMovies: [
      "tt7488208",
      "tt10620868",
      "tt11576124",
      "tt7149730",
      "tt8544498",
      "tt8160834",
      "tt8784956",
      "tt8936646",
      "tt7052270",
      "tt5715066",
    ],
    originalNetflix: [
      "tt3799232",
      "tt7984766",
      "tt7550000",
      "tt11127690",
      "tt4332232",
      "tt5519340",
      "tt9495224",
      "tt1464763",
      "tt10048342",
    ],
  };

  componentDidMount = async () => {
    let trendingMovies = [];
    let newMovies = [];
    let originalNetflix = [];
    this.state.trendingMovies.map(async (e) => {
      const data = await this.fetchMovieByID(e);
      trendingMovies.push(data);
      this.setState({ trendingMovies: trendingMovies });
    });
    this.state.newMovies.map(async (e) => {
      const data = await this.fetchMovieByID(e);
      newMovies.push(data);
      this.setState({ newMovies: newMovies });
    });
    this.state.originalNetflix.map(async (e) => {
      const data = await this.fetchMovieByID(e);
      originalNetflix.push(data);
      this.setState({ originalNetflix: originalNetflix });
    });
  };

  fetchMovieByID = async (id) => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=925b91e7&i=${id}`);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <Container fluid className="my-5">
          <MovieRow
            key={3}
            title="Netflix Originals"
            movieData={this.state.originalNetflix}
            isTall={true}
            routerInfo={this.props}
          />
          <MovieRow
            key={1}
            title="Trending Now"
            movieData={this.state.trendingMovies}
            isTall={false}
            routerInfo={this.props}
          />
          <MovieRow
            key={2}
            title="New Releases"
            movieData={this.state.newMovies}
            isTall={false}
            routerInfo={this.props}
          />
        </Container>
      </div>
    );
  }
}
export default MoviesContainer;
