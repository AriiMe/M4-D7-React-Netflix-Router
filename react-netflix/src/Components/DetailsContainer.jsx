import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DetailsBanner from "./DetailsBanner";
import DetailsPageComments from "./DetailsPageComments";

class DetailsContainer extends React.Component {
  state = {
    currentMovieID: this.props.match.params.id,
    movieData: {},
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=925b91e7&i=${this.state.currentMovieID}`);
      let data = await response.json();
      this.setState({ movieData: data });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <div className="banner-wrap w-100">
          <DetailsBanner img={this.state.movieData.Poster} />
        </div>

        <Container style={{ minHeight: "70vh" }} className="py-5">
          <Row className="py-5">
            <Col xs={3}>
              <img className="img-fluid" src={this.state.movieData.Poster} alt="movie-poster" />
            </Col>
            <Col xs={9}>
              <h1>{this.state.movieData.Title}</h1>
              <p>{this.state.movieData.Plot}</p>
              <br />
              <DetailsPageComments movieID={this.state.currentMovieID} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default DetailsContainer;
