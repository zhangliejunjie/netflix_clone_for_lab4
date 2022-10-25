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
import SimilarVideoCard from './components/SimilarVideoCard';
import { Grid } from '@mui/material';
import About from './components/About';


function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<><TopTrailer /><Trending filmList={ListOfFilms} ></Trending></>} >
        </Route>
        <Route path='/detail/:id' element={<FilmDetail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>
      <FooterMeow />
    </div>

  );
}

export default App;
