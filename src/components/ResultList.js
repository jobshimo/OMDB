import { ReactComponent as ChevronLeft } from '../chevron-left.svg'
import { ReactComponent as ChevronRight } from '../chevron-right.svg'
import FilmList from './FilmList';

const ResultList = ({handlePage,searchResult, page}) => {
  return (
    <div className="search-results">
      <div className="chevron">
        <ChevronLeft onClick={page !== 1 ? () => handlePage(-1) : null} />
      </div>
      <div className="search-results-list">
        {searchResult.Search.map((result, index) => (
          <FilmList key={result.imdbID + index} result={result} index={index} /> // Necesita el index porque el API devuelve resultados repetidos.
        ))}
      </div>
      <div className="chevron">
        <ChevronRight onClick={page < (searchResult.totalResults / 10) ? () => handlePage(1) : null} />
      </div>
    </div>
  );
}

export default ResultList;