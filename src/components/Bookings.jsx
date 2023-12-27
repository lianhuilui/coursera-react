import { BookingForm } from "./BookingForm"

export function Bookings({availableTimes, updateAvailableTimes}) {

  return (
    <div className="bg-primary py-4">
      <div className="container py-4">
        <h1>Book a table</h1>

        <BookingForm availableTimes={availableTimes} updateAvailableTimes={updateAvailableTimes}/>
      </div>
    </div>
  );
}

