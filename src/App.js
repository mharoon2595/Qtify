import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TopAlbums from './components/TopAlbums/TopAlbums';
import axios from 'axios'

export const config={'endpoint':'https://qtify-backend-labs.crio.do/albums/top'}

function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <TopAlbums/>
    </div>
  );
}

export default App;
