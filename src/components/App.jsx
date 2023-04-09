// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/moviesApi';
import Button from './Button/Button';
import MoviesList from './MoviesList/MoviesList';

const App = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isListShown) {
      getMovies();
    }

    if (!isListShown) {
      setMovies([]);
      setPage(1);
    }
  }, [isListShown, page]);

  const handleClick = () => {
    setIsListShown(prevState => !prevState);
  };

  const getMovies = () => {
    setIsLoading(true);

    fetchMovies(page)
      .then(response => {
        setMovies(prevMovies => [...prevMovies, ...response.data.results]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const deleteMovie = id => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  return (
    <>
      <Button
        textContent={isListShown ? 'Hide movies list' : 'Show movies list'}
        handleClick={handleClick}
      />
      {movies.length > 0 && isListShown && (
        <>
          <MoviesList movies={movies} deleteMovie={deleteMovie} />
          <Button textContent="Load more" handleClick={loadMore} />
        </>
      )}
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     isListShown: false,
//     movies: [],
//     page: 1,
//     isLoading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevIsListShown = prevState.isListShown;
//     const currIsListShown = this.state.isListShown;
//     const prevPage = prevState.page;
//     const currPage = this.state.page;

//     if (
//       (prevIsListShown !== currIsListShown || prevPage !== currPage) &&
//       currIsListShown
//     ) {
//       this.getMovies();
//     }

//     if (prevIsListShown !== currIsListShown && !currIsListShown) {
//       this.setState({ movies: [], page: 1 });
//     }
//   }

//   handleClick = () => {
//     this.setState(prevState => ({
//       isListShown: !prevState.isListShown,
//     }));
//   };

//   getMovies = () => {
//     const { page } = this.state;
//     this.setState({ isLoading: true });

//     fetchMovies(page)
//       .then(response => {
//         this.setState(prevState => ({
//           movies: [...prevState.movies, ...response.data.results],
//         }));
//       })
//       .catch(error => console.log(error))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   loadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   deleteMovie = id => {
//     this.setState(prevState => ({
//       movies: prevState.movies.filter(movie => movie.id !== id),
//     }));
//   };

//   render() {
//     const { isListShown, movies } = this.state;
//     return (
//       <>
//         <Button
//           textContent={isListShown ? 'Hide movies list' : 'Show movies list'}
//           handleClick={this.handleClick}
//         />
//         {movies.length > 0 && isListShown && (
//           <>
//             <MoviesList movies={movies} deleteMovie={this.deleteMovie} />
//             <Button textContent="Load more" handleClick={this.loadMore} />
//           </>
//         )}
//       </>
//     );
//   }
// }
