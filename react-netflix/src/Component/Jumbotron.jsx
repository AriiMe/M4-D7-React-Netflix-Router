import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import JumboVideo from "../images/JumboVideo.mp4";

class JumboTron extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{ height: "65vh" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              position: "relative",

              width: "100%",
              height: "80vh",
              zIndex: "0",
              overflow: "hidden",
            }}
          >
            <video src={JumboVideo} autoPlay muted loop style={{ position: "relative", width: "100%" }}></video>
          </div>

          <div
            className="pl-5"
            style={{
              position: "absolute",
              zIndex: "5",
              top: "80%",
              color: "#fff",
            }}
          >
            <h1>Big Mouth</h1>
            <h4 className="mb-4">Season 4 now available!</h4>
            <button className="mr-2 py-2 px-3 btn btn-danger">
              <i className="fas fa-play mr-2"></i>Play episode
            </button>
            <button className="mr-2 py-2 px-3 btn btn-secondary">Episodes</button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default JumboTron;
