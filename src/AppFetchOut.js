import React, { useState, useEffect } from 'react'
import './App.css'
import ResultList from './components/ResultList'
import Search from './components/Search'

function App() {
  const [searchResult, setSearchResult] = useState()
  const [page, setPage] = useState(1)
  const [textInput, setTextInput] = useState('king')
  const url = `http://www.omdbapi.com/?apikey=a461e386&s=${textInput}&page=${page}`

  const callAPI = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const search = async () => {
      const result = await callAPI()
      if (result && result.Response === "True") {
        setSearchResult(result)
        return
      } else {
        setSearchResult()
        return
      }
    }
    search()
  }, [page])

  const handleText = (event) => {
    setTextInput(event.target.value)
  }

  const handleSearch = async () => {
    setPage(1)
    const result = await callAPI()
    if (result && result.Response === "True") {
      setSearchResult(result)
      return
    }

  }

  const handlePage = (e) => {
    setPage((value) => value += e)
  }

  return (
    <div className="App">
      <Search handleSearch={handleSearch} handleText={handleText} />
      {!searchResult
        ? (<p>No results yet</p>)
        : (
          <ResultList handlePage={handlePage} searchResult={searchResult} page={page} />
        )}
    </div>
  )
}

export default App
