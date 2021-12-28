import React from 'react';
import ReactDOM from 'react-dom';

class MovieDetail extends React.Component {
  render() {
    if (!this.props.showMovie) {
      return null
    }
     const {background_image_original, medium_cover_image, title, description_intro, rating, url, runtime, medium_screenshot_image1, medium_screenshot_image2, medium_screenshot_image3, large_screenshot_image1, large_screenshot_image2, large_screenshot_image3, small_cover_image, genres} = this.props.movie;
    
    return (
   <div>
   <div class="movie-head">
		<div onClick={this.props.onBack} class="back">Back</div>
		<a class="logo" href="">MovieApp</a>
	</div>
	
	<div class="movie-content">
		<div class="background">
			<img src={background_image_original} alt=""/>
		</div>
		<div class="movie-profile">
			<div class="first-profile">
				<div>
					<img src={medium_cover_image} alt=""/>
				</div>
			</div>
			<div class="second-profile">
				<h1>{title}</h1>
				<p>{description_intro}</p>
				<h3>Rating: {rating}</h3>
				<a href={url}>{url}</a>
				<h3>Runtime: {runtime}</h3>
				<h3>Genre: {genres.toString()}</h3>
				<div class="screenshots">
					<img src={medium_screenshot_image1} alt=""/>
					<img src={medium_screenshot_image2} alt=""/>
					<img src={medium_screenshot_image3} alt=""/>
					<img src={large_screenshot_image1} alt=""/>
					<img src={large_screenshot_image2} alt=""/>
					<img src={large_screenshot_image3} alt=""/>
			  	<img src={small_cover_image} alt=""/>
				</div>
			</div>
		</div>
	</div>
	</div>
    )
  }
}

export default MovieDetail