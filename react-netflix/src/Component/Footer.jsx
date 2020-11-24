import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer */}
        <footer className="page-footer font-small stylish-color-dark pt-4">
          {/* Footer Links */}
          <div className="container text-left">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-4 ml-0">
                {/* Content */}
                {/* Social buttons */}
                <ul className="list-unstyled list-inline text-left ">
                  <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-fb mx-1">
                      <i className="fab fa-facebook-square fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-tw mx-1">
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-gplus mx-1">
                      <i className="fab fa-twitter fa-2x"> </i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-li mx-1">
                      <i className="fab fa-youtube fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social buttons */}
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="row">
              <div className="col-md-2 ml-0">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Audio and Subtitles</a>
                  </li>
                  <li>
                    <a href="#!">Audio Description</a>
                  </li>
                  <li>
                    <a href="https://help.netflix.com/">Help Center</a>
                  </li>
                  <li>
                    <a href="#!">Gift Cards</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="https://media.netflix.com/">Media Center</a>
                  </li>
                  <li>
                    <a href="#!">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#!">Jobs</a>
                  </li>
                  <li>
                    <a href="#!">Terms of Use</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Privacy</a>
                  </li>
                  <li>
                    <a href="#!">Legal Notices</a>
                  </li>
                  <li>
                    <a href="#!">Cookie Preferences</a>
                  </li>
                  <li>
                    <a href="#!">Corporate Information</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Grid row */}

            {/* Footer Links */}
            <hr />
            <hr />

            {/* Copyright */}
            <div className="footer-copyright text-center py-3">
              <a href="https://netflix.com/">© 2020 Copyright: netflix.com</a>
            </div>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    );
  }
}

export default Footer;
