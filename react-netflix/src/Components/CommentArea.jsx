import React from "react";
import { ListGroup, Col, Container, Row, Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
class CommentArea extends React.Component {
  state = {
    comments: [],
    movieID: this.props.movieID,
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchComments();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500);
  };

  fetchComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.MovieID}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGEwNjk4MzViMDAwMTc1ODRmMzMiLCJpYXQiOjE2MDU3OTg0MDcsImV4cCI6MTYwNzAwODAwN30.YMFEHuLKmsTiRw_58rtTkNg5n_1jZGZdmOubN1Oo9O0",
        },
      });
      let comments = await response.json();
      this.setState({ comments });
    } catch (er) {
      console.log(er);
    }
  };
  render() {
    return (
      <div>
        <Container id="commentArea">
          <Row>
            <Col xs={6} className="offset-3">
              <img src={this.props.image} className="img-fluid w-80 mx-auto" alt=""></img>
            </Col>
          </Row>
          <Row>
            <AddComment fetchComments={this.fetchComments} MovieID={this.props.MovieID} />
          </Row>
        </Container>
        <ListGroup.Item>
          <h4>Comments</h4>
          <div className={this.state.isLoading ? "d-block w-100" : "d-none"}>
            <p className="d-inline-block mb-0 mr-2">Loading...</p>
            <Spinner size="sm" animation="border" variant="danger" disabled />
          </div>

          {!this.state.isLoading &&
            this.state.comments.map((comment, index) => (
              <p key={index}>
                {comment.comment} (
                {Array.from({ length: comment.rate }).map((star, index) => (
                  <span key={index}>&#9734;</span>
                ))}
                )
              </p>
            ))}
        </ListGroup.Item>
      </div>
    );
  }
}

export default CommentArea;
