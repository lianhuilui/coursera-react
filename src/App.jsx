import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Specials } from './components/Specials';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Specials></Specials>
      <Testimonials />
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
