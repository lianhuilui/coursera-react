import logo from "../assets/whitelogo.jpg"
import { Link } from "react-router-dom"

export function SuccessfulBooking() {
  return (
    <div className="bg-primary py-4">
      <div className="container py-4 px-4 md:px-0">
        <img className="whitelogo" src={logo} alt="" />
        <div className="successful-booking">Booking Confirmed! Thank you for your booking.</div>

        <div className="text-center">
          <Link className="back-to-home" to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
