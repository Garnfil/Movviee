import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';

class Movies extends React.Component {
  render() {
    if (!this.props.showBody) {
      return null
    }
    return (
      <div className="main-container">
        <Movie onShowMovie={this.props.onShowMovie} movies={this.props.movies}/>
      </div>
    )
  }
}
export default Movies