import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import PagesButtons from './components/PageButtons';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';

class App extends React.Component {
  
  state = {
    movies: null,
    onLoaded: false,
    genre: '',
    query: '',
    page: 1,
    showBody: false,
    showMovie: false
  }
  
  componentDidMount() {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=30&page=${this.state.page}&genre=${this.state.genre}&order_by=desc`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
          onLoaded: true,
          showBody: true
        })
     })
  }
  
  
  onGenre = (genre, e) => {
    this.setState({
      genre: genre
    })
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=30&genre=${genre}&sort_by=2021`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
        })
      })
      const filterButtons = document.querySelectorAll('.second-head button');
      for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].classList.remove('active');
      }
      e.target.classList.add('active');
      
  }
  
  onSearchMovie = (val) => {
    this.setState({
      query: val
    })
    fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${val}`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
        })
     })
  }
  
  onPage = (page) => {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&page=${page}&genre=${this.state.genre}&sort_by=2021`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
          page: page
        })
      })
      const pageButtons = document.querySelectorAll('.page-buttons button');
      
      for (let i = 0; i < pageButtons.length; i++) {
        pageButtons[i].classList.remove('active');
      }
      pageButtons[page -1].classList.add('active');
  }
  
  onShowMovie = (id) => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true`)
      .then(response => response.json())
      .then(movie_detail => {
        this.setState({
          movies: movie_detail.data.movie,
          showBody: false,
          showMovie: true
        })
        console.log(movie_detail)
      })
  }
  
  onBack = () => {
    fetch(`https://yts.mx/api/v2/list_movies.json?limit=30&page=${this.state.page}&genre=${this.state.genre}&sort_by=2021`)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.data.movies,
          onLoaded: true,
          showBody: true,
          showMovie: false
        })
      })
  }
  
  render() {
    if (!this.state.onLoaded) {
      return <h1>Please wait for a while</h1>
    }
    return(
      <React.Fragment>
        <Header showBody={this.state.showBody} onGenre={this.onGenre} onSearchMovie={this.onSearchMovie} />
        <Movies onShowMovie={this.onShowMovie} showBody={this.state.showBody} movies={this.state.movies} />
        <PagesButtons showBody={this.state.showBody} onPage={this.onPage}/>
        <MovieDetail onBack={this.onBack} movie={this.state.movies} showMovie={this.state.showMovie} onShowMovie={this.onShowMovie} />
      </React.Fragment>
    )
  }
}


export default App;
