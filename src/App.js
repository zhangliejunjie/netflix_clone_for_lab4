import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Parallax from './components/Parallax';
import Trending from './components/Trending';
import { ListOfFilms } from './share/ListOfFilms';
import Footer from './components/Footer';
import FilmDetail from './components/FilmDetail';
import Contact from './components/Contact';

import {
  Routes,
  Route,
} from "react-router-dom";
import FooterMeow from './components/FooterMeow';
import TopTrailer from './components/TopTrailer';
import About from './components/About';
import Accounts from './components/Accounts';
import ItemsPage from './components/ItemsPage';


function App() {
  return (
    <div className='App'>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navigation />
              <TopTrailer />
              <Trending filmList={ListOfFilms} /> 
              <FooterMeow />
            </>}
        >
        </Route>
        <Route path='/detail/:id'
          element={
            <>
              <Navigation />
              <TopTrailer />
              <Trending filmList={ListOfFilms} />
              <FilmDetail />
              <FooterMeow />
            </>
          }
        />
        <Route path='/contact' element={
          <>
            <Navigation />
            <Contact />
            <FooterMeow />
          </>
        } />
        <Route path='/about'
          element={
            <>
              <Navigation />
              <About />
              <FooterMeow />
            </>
          } />
        <Route path='/accounts' element={
          <>
            <Navigation />
            <Accounts />
            {/* <FooterMeow /> */}
          </>
        } />
      </Routes>
      


    </div>

  );
}

export default App;
