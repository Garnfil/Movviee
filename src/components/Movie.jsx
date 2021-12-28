import React from 'react';
import ReactDOM from 'react-dom';

class Movie extends React.Component {
  render() {
    return (
      this.props.movies.map(movie =>
      <div onClick={this.props.onShowMovie.bind(this, movie.id)}>
        <img src={movie.medium_cover_image} />
        <h2>{movie.title}</h2>
      </div>)
    )
  }
}

export default Movie