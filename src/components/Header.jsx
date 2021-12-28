import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  state = {
    searchValue: '',
  }
  
  onSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  
  render() {
    if (!this.props.showBody) {
      return null
    }
    return(
      <div className="header">
       	<div class="first-head">
        	<a class="logo" href="">MoviesApp</a>
        	<div>
      	    <input value={this.state.searchValue} onChange={this.onSearch} class="search-bar" type="search" placeholder="Search..."/>
      	    <button onClick={this.props.onSearchMovie.bind(this, this.state.searchValue)} className="search-button">Search</button>
      	  </div>
      	</div>
      	<div class="second-head">
      	 <button className='active' onClick={this.props.onGenre.bind(this, '')}>All</button>
         <button onClick={this.props.onGenre.bind(this, 'Action')}>Action</button>
      	 <button onClick={this.props.onGenre.bind(this, 'Romance')}>Romance</button>
     	   <button onClick={this.props.onGenre.bind(this, 'Comedy')}>Comedy</button>
         <button onClick={this.props.onGenre.bind(this, 'Fantasy')}>Fantasy</button>
         <button onClick={this.props.onGenre.bind(this, 'Sci-Fi')}>Sci-fi</button>
         <button onClick={this.props.onGenre.bind(this, 'Horror')}>Horror</button>
         <button onClick={this.props.onGenre.bind(this, 'Thriller')}>Thriller</button>
         <button onClick={this.props.onGenre.bind(this, 'Adventure')}>Adventure</button>
         <button onClick={this.props.onGenre.bind(this, 'Crime')}>Crime</button>
       	 <button onClick={this.props.onGenre.bind(this, 'Drama')}>Drama</button>
       	 <button onClick={this.props.onGenre.bind(this, 'Animation')}>Animation</button>
      	</div>
     </div>
    )
  }
}

export default Header