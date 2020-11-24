import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import netflixlogo from "../images/netflixlogo.png";
import searchIcon from "../images/searchIcon.png";
import giftIcon from "../images/giftIcon.png";
import bell from "../images/bell.png";
import user from "../images/user.png";
import SearchBox from "../Components/SearchBox";
class NavBar extends React.Component {
  state = {
    isSearch: false,
    searchInput: "",
  };

  toggleSearch = () => {
    this.state.isSearch ? this.setState({ isSearch: false }) : this.setState({ isSearch: true });
  };

  setInputValue = (e) => {
    this.setState({ searchInput: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <Navbar className="d-flex align-items-center">
          <Link to="/">
            <Navbar.Brand>
              <img src={netflixlogo} width="auto" height="33px" className="mb-0 ml-4" alt="logo" />
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto mb-0">
            <Link to="/">
              <div className="nav-link" style={{ color: "white" }}>
                Home
              </div>
            </Link>

            <Nav.Link style={{ color: "white" }}>TV Shows</Nav.Link>
            <Nav.Link style={{ color: "white" }}>Recently Added</Nav.Link>
          </Nav>
          <Form inline onMouseLeave={this.state.searchInput.length === 0 && this.toggleSearch}>
            <img
              style={{
                height: "20px",
                cursor: "pointer",
                marginRight: "10px",
              }}
              src={searchIcon}
              alt="search-icon"
              onMouseEnter={!this.state.isSearchOpen && this.toggleSearch}
            ></img>
            <FormControl
              id="search-box"
              className={this.state.isSearch ? "d-block" : "d-none"}
              style={{ backgroundColor: "transparent", borderRadius: "0" }}
              type="text"
              placeholder="Titles, people, genres"
              onChange={this.setInputValue}
              value={this.state.searchInput}
            />
            <Nav.Link style={{ color: "white", fontSize: "0.8rem" }}>KIDS</Nav.Link>
            <img style={{ height: "20px", marginRight: "20px" }} src={giftIcon} alt="gift-icon"></img>
          </Form>
          <img
            style={{
              height: "20px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            src={bell}
            alt="notifications-icon"
          ></img>{" "}
          <img
            style={{
              height: "20px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            src={user}
            alt="user-icon"
          ></img>
        </Navbar>
        <SearchBox isSearchOpen={this.state.isSearch} searchInput={this.state.searchInput} />
      </>
    );
  }
}

export default NavBar;
