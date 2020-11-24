import React from "react";
import SearchItem from "../Components/SearchItem";

class SearchBox extends React.Component {
  state = {
    searchInput: this.props.searchInput,
    isSearchOpen: this.props.isSearchOpen,
    searchResults: [],
  };

  fetchMovieByTerm = async (searchterm) => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=925b91e7&s=${searchterm}`);
      let data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate = async (prevProps) => {
    prevProps.isSearchOpen !== this.props.isSearchOpen && this.setState({ isSearchOpen: this.props.isSearchOpen });
    if (prevProps.searchInput !== this.props.searchInput) {
      this.setState({ searchInput: this.props.searchInput });
      this.updateSearch(this.state.searchInput);
    }
  };

  updateSearch = async () => {
    if (this.state.searchInput.length > 0) {
      let searchArray = [];
      const searchResult = await this.fetchMovieByTerm(this.state.searchInput);
      if (searchResult.Response === "True") {
        searchArray = searchResult.Search;
        this.setState({ searchResults: searchArray });
      }
    }
  };

  render() {
    const { searchInput, isSearchOpen, searchResults } = this.state;
    return (
      <div
        className={
          isSearchOpen && searchInput && searchInput.length > 0
            ? "search-container py-3 px-3"
            : "d-none search-container py-3 px-3"
        }
      >
        <h6 className="mt-2 mb-4">
          Search results for..."<span style={{ color: "#ff5659" }}>{searchInput}</span>"
        </h6>
        {searchResults.length > 0 &&
          searchResults.map((e, index) => (
            <SearchItem key={index} title={e.Title} releaseDate={e.Year} image={e.Poster} />
          ))}
      </div>
    );
  }
}

export default SearchBox;
