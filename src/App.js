import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Albums from './components/Albums/Albums';
import Songs from './components/Songs/Songs';
import axios from 'axios'
import Faq from './components/FAQs/Faq'

export const config={'endpoint':'https://qtify-backend-labs.crio.do/albums/top'}

function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Albums/>
     <Songs />
     <Faq />
    </div>
  );
}

export default App;
