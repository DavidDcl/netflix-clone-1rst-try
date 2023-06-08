import React from 'react'
import './homescreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests'
const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horro Movies' fetchUrl={requests.fetchHorroMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries ' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
