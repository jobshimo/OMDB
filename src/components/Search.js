const Search = ({handleText, handleSearch, disabled }) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search..." onChange={handleText} />
            <button className={disabled?'disabled':null} disabled={disabled} onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;