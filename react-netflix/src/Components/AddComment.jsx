import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class AddComment extends React.Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.movieID,
    },
    errMessage: "",
  };

  updateCommentField = (e) => {
    let comment = { ...this.state.comment };
    let currentId = e.currentTarget.id;
    comment[currentId] = e.currentTarget.value;
    this.setState({ comment: comment });
  };

  submitComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGEwNjk4MzViMDAwMTc1ODRmMzMiLCJpYXQiOjE2MDU3OTg0MDcsImV4cCI6MTYwNzAwODAwN30.YMFEHuLKmsTiRw_58rtTkNg5n_1jZGZdmOubN1Oo9O0",
        },
      });
      if (response.ok) {
        this.props.fetchComments();
        this.setState({
          comment: {
            comment: "",
            rate: 1,
            elementId: this.props.movieID,
          },
        });
      } else {
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (e) {
      console.log(e);
      this.setState({
        errMessage: e.message,
      });
    }
  };

  componentDidMount = () => {
    this.setState({ elementId: this.props.movieID });
  };

  render() {
    return (
      <Container id="AddComment" className="px-0">
        <h5>Add Comment:</h5>
        <Form onSubmit={this.submitComment}>
          <Row>
            <Col xs={6}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  name="comment"
                  id="comment"
                  placeholder="What do you think?"
                  value={this.state.comment.comment}
                  onChange={this.updateCommentField}
                  required
                />
              </Form.Group>
              <Form.Group className="w-100">
                <Form.Label htmlFor="rate">Rating:</Form.Label>
                <Form.Control
                  className="w-50"
                  as="select"
                  name="rate"
                  id="rate"
                  value={this.state.comment.rate}
                  onChange={this.updateCommentField}
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                <Button type="sumbit" variant="success" value="Submit" className="mt-2">
                  Submit
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default AddComment;
