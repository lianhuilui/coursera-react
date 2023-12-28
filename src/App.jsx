import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "./components/HomePage"
import { Bookings } from "./components/Bookings"
import { BrowserRouter } from 'react-router-dom';
import { useReducer } from 'react';
import { SuccessfulBooking } from './components/SuccessfulBooking';

// the reducer
function updateTimes(state, { type, times }) {
  console.log('update in reducer called')
  switch (type) {
    case "update":
      if (times) {
        return times
      } else {
        return state
      }
    default:
      console.log("unknown action type: " + type)
  }
}

function App() {
  let [availableTimes, updateAvailableTimes] = useReducer(updateTimes, [])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Bookings availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes} />} />
        <Route path="/successful-booking" element={<SuccessfulBooking/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
