import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Parallax from './Components/Parallax';
import Trending from './Components/Trending';
import { ListOfFilms } from './Share/ListOfFilms';
import Footer from './Components/Footer';
import FilmDetail from './Components/FilmDetail';
import Contact from './Components/Contact';

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* <Routes>
        <Route
          path='/'
          element={<><Parallax /><Trending filmList={ListOfFilms} ></Trending></>} >
        </Route>

        <Route path='/detail/:id' element={<FilmDetail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
      <Footer /> */}
    </div>

  );
}

export default App;
