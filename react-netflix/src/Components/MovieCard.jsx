import React from "react";

class MovieCard extends React.Component {
  state = {
    elementId: this.props.movieId,
    category: this.props.category,
    title: this.props.title,
    description: this.props.description,
    poster: this.props.image,
    isOpen: false,
    isTall: this.props.isTall,
    routerData: this.props.routerData,
    selectedMovie: {},
  };
  closeModal = () => this.setState({ isOpen: false });

  openModal = (title) => {
    this.setState({ selectedMovie: title, isOpen: true });
  };

  render() {
    const { title, description, image, isTall } = this.props;

    return (
      <>
        <div
          className={isTall ? "show-wrapper show-wrapper-lg mr-2 puff-in-center " : "show-wrapper mr-2 puff-in-center"}
        >
          <img className={isTall ? "show-img" : "show-img img-shift"} src={image} alt="movie-poster" />
          <div
            className={
              isTall
                ? `show-content-lg ${
                    this.state.isOpen ? "" : "translateY-lg"
                  } d-flex justify-content-center align-items-start flex-column px-4 py-2`
                : `show-content d-flex ${
                    this.state.isOpen ? "" : "translateY"
                  } justify-content-center align-items-start flex-column px-4 py-2`
            }
          >
            <h5 className="mb-2">{title}</h5>
            <p className="mb-2">{description}</p>
            <button
              className="py-2 px-2"
              onClick={() => {
                this.state.routerData.history.push(`/details/${this.state.elementId}`);
              }}
            >
              <i className="fas fa-info-circle mr-2"></i>View Details
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default MovieCard;
