import React from "react";
import { Spinner } from "react-bootstrap";
import MovieCard from "./MovieCard";

class MovieRow extends React.Component {
  state = {
    title: this.props.title,
    movieData: this.props.movieData,
    isTall: this.props.isTall,
    isLoading: true,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  };

  render() {
    const { title, movieData, isTall } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        {this.state.isLoading ? (
          <div className="d-block w-100 mb-5">
            <p className="d-inline-block mb-0 mr-2" style={{ color: "white" }}>
              Loading...
            </p>
            <Spinner size="sm" animation="border" variant="danger" disabled />
          </div>
        ) : (
          <div className="mb-4 shows-row rounded">
            {movieData.map((e, index) => (
              <MovieCard
                key={index}
                movieId={e.imdbID}
                title={e.Title}
                description={e.Plot}
                image={e.Poster}
                category={title}
                isTall={isTall}
                routerData={this.props.routerInfo}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default MovieRow;
