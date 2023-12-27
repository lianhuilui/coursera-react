import { useState } from "react";
import { Select } from "./Select"

export function BookingForm({availableTimes, updateAvailableTimes}) {

  let [formData, setFormData] = useState({
    name: "",
    occasion: "",
    date: '',
    time: '',
    guests: 0
  })

  function handleChange(e) {
    e.preventDefault();

    let { name, value } = e.target;

    let data = { ...formData }
    data[name] = value

    setFormData(data)
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateAvailableTimes({
      type: 'make_booking',
      booking: formData
    })
  }

  return (<form onSubmit={handleSubmit} className="booking-form">
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={formData.name} name="name" onChange={handleChange} placeholder="Main Guest"/>
    </div>

    <div>
      <label htmlFor="date">
        Choose Date
      </label>
      <input id="date" type="date" value={formData.date} name="date" onChange={handleChange} />
    </div>

    <div>
      <label htmlFor="time">
        Choose Time
      </label>

      <Select id="time" onChange={handleChange} name="time">
        <Select.Option value="">-- Time --</Select.Option>
        {availableTimes?.map(({value}) => (<Select.Option key={value} value={value}>{value}</Select.Option>))}
      </Select>
    </div>

    <div>
      <label htmlFor="occasion">
        Occasion:
      </label>
      <Select id="occasion" onChange={handleChange} name="occasion">
        <Select.Option value="">-- Occasion --</Select.Option>
        <Select.Option value="birthday">Birthday</Select.Option>
        <Select.Option value="anniversary">Anniversary</Select.Option>
      </Select>
    </div>

    <div>
      <label htmlFor="guests">How many guests?</label>
      <input type="number" name="guests" id="guests" onChange={handleChange} min="1" max="10" placeholder="1"/>
    </div>

    <hr />

    <div>
      <div></div>
      <button aria-disabled={formData.guests < 1} disabled={formData.guests < 1} type="submit">Make Your Reservation</button>
    </div>
  </form>)
}

