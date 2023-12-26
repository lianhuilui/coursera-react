import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "./components/HomePage"
import { Book } from "./components/Book"

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
