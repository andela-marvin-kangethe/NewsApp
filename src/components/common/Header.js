import React, { Component, PropTypes } from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
    // this.handleSearch = this.handleSearch.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    // this.showAutoSuggestion = this.showAutoSuggestion.bind(this);

    this.state = {
      searchValue : ""
    };
  }

// // This handler will handle what the search button does.
//   handleSearch = (event) => {
//     event.preventDefault();
//     // this.props.handleSearch(
//     //   this.props.articlesURL,
//     //   this.props.source,
//     //   "&source="+this.state.searchValue
//     // );
//     console.log("This is the search value")
//   }

// // This handler will change the value to be searched
//   handleChange = (event) => {
//     event.preventDefault();
//     this.setState({searchValue: event.target.value});

//     console.log("This is the value to be searched as of now",this.state.searchValue)
//   }
// // This handler will handle user logout functionalities

//   handleLogout = () => {
//     console.log("This is time to logout user")
//   }

//   showAutoSuggestion = () => {
//     return (
//       <div className="searchSuggestions">
//         <p>{ this.state.searchValue }</p>
//       </div>
//     );
//   }
  
  render() {
    return (
      <div className="mdl-layout__header-row">
        <div className="app_name mdl-layout-title">
          <span>Andela News</span>
        </div>
        <div className="mdl-layout-spacer"> </div>
        <div className="searchBar">
          <form>
            <input 
              className="search_field ui input"
              type="text"
              value={ this.state.searchValue }
              placeholder="Type here" />
            <input
              className="search_button"
              type="submit"
              value="Search" />
          </form>
        </div>
        <div className="mdl-layout-spacer"> </div>
        <div className="logoutBar">
          <form>
            <a href="#" className="mdl-badge read_later" data-badge="4">
              Liked
            </a>
            <img
              className="user_avatar"
              src={ this.props.avatar }
              alt="Gravatar"
              />
            <button 
              className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
            >Logout</button>
          </form>
        </div>
      </div>
    );
  }
}

Header.PropTypes = {
  avatar: PropTypes.string.isRequired
};

Header.defaultProps = {
  avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9VI0T5nNpmAgqF6hWQOWJ0MGMeRZpR1NYhx5zQswVd5Cd4-ndw"
};

export default Header;