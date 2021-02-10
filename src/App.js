import React, { useState, useEffect } from 'react'
import './App.css'
import ResultList from './components/ResultList'
import Search from './components/Search'

function App() {
  const [searchResult, setSearchResult] = useState()
  const [disabled, setDisabled] = useState(true)
  const [page, setPage] = useState(1)
  const [textInput, setTextInput] = useState('king')
  const [goSearch, setGoSearch] = useState(false)
  const url = `http://www.omdbapi.com/?apikey=a461e386&s=${textInput}&page=${page}`

  useEffect(() => {
    const search = async () => {
      const response = await fetch(url)
      const data = await response.json()
      if (data && data.Response === "True") {
        setSearchResult(data)
        return
      } else {
        setSearchResult()
        return
      }
    }
    setGoSearch(false)
    search()
  }, [goSearch, page])


  const handleText = (event) => {
    if (event.target.value.trim() === '') {
      setDisabled(true)
      return
    }
    setDisabled(false)
    setTextInput(event.target.value.trim())
  }
  
  const handleSearch = () => {
    setPage(1)
    setGoSearch(true)
  }

  const handlePage = (e) => {
    setPage((value) => value += e)
  }

  return (
    <div className="App">
      <Search handleSearch={handleSearch} handleText={handleText} disabled={disabled} />
      {!searchResult
        ? (<p>No results yet</p>)
        : (
          <ResultList handlePage={handlePage} searchResult={searchResult} page={page} />
        )}
    </div>
  )
}

export default App
