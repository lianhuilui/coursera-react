import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "./components/HomePage"
import { Bookings } from "./components/Bookings"
import { BrowserRouter } from 'react-router-dom';
import { useReducer } from 'react';

function initializeTimes() {
  let availableTimes = [
    { value: "17:00" },
    { value: "18:00" },
    { value: "19:00" },
    { value: "20:00" },
    { value: "21:00" },
    { value: "22:00" },
  ]

  return availableTimes;
}

// the reducer
function updateTimes(state, { type, booking }) {

  switch (type) {
    case "make_booking":
      return state.filter(({ value }) => value !== booking.time)
    default:
      console.error("unknown action type: " + type)
  }
}

function App() {
  let [availableTimes, updateAvailableTimes] = useReducer(updateTimes, initializeTimes())

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Bookings availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
