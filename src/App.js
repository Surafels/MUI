import { Container } from '@mui/system';
import Home from './pages/Home';
import './App.css';
import { Grid, Typography } from '@mui/material';
import SearchAppBar from './components/AppBar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Tour from './pages/Tour';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <SearchAppBar />

      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/:id' element= {<Tour />} />

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
