import Button from 'components/Button/Button';

const MoviesList = ({ movies, deleteMovie }) => {
  return (
    <ul>
      {movies.map(({ id, title, vote_count }) => {
        return (
          <li key={id}>
            <p>{title}</p>
            <p>{vote_count}</p>
            <Button
              textContent="Delete movie"
              handleClick={() => deleteMovie(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
