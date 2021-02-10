import placeholderImg from '../placeholder.png'

const FilmList = ({ result, index }) => {
  return (
    <div key={result.imdbID + index} className="search-item">
      <img
        src={result.Poster === 'N/A' ? placeholderImg : result.Poster}
        alt="poster"
      />
      <div className="search-item-data">
        <div className="title">{result.Title}</div>
        <div className="meta">{`${result.Type} | ${result.Year}`}</div>
      </div>
    </div>
  );
}

export default FilmList;