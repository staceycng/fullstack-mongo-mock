import React from 'react';
  
var Search = (props) => {


var handleClick = (e) => {
  // Get search term
  var searchTerm = document.getElementsByClassName('form-control')[0].value;
  // Call function that changes display based on search
  props.search(searchTerm);
}

return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={handleClick}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
)};

export default Search;