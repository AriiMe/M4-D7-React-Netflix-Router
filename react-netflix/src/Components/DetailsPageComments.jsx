import React from "react";
import { Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";

class DetailsPageComments extends React.Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.movieID}`, {
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

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    const { movieID } = this.props;
    return (
      <div>
        <Container id="commentArea" className="px-0">
          <h4 className="mb-3">Comments</h4>
          {this.state.comments.map((comment, index) => (
            <div className="comment swing-in-top-fwd" key={index}>
              <p className="d-inline-block mb-0">{comment.comment}</p> (
              {Array.from({ length: comment.rate }).map((star, index) => (
                <span key={index}>&#9734;</span>
              ))}
              )
            </div>
          ))}
          <Row className="mt-5">
            <AddComment fetchComments={this.fetchComments} movieID={movieID} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetailsPageComments;
