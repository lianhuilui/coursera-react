import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "./Select"
import { Submitting } from "./Submitting";

export function BookingForm({availableTimes, updateAvailableTimes}) {

  let [formData, setFormData] = useState({
    name: "",
    occassion: "",
    date: '',
    time: '',
    guests: ""
  })

  let [loading, setLoading] = useState(false)

  async function handleChange(e) {
    e.preventDefault();

    let { name, value } = e.target;

    let data = { ...formData }
    data[name] = value

    if (name === 'date') {
      console.log('calling update')
      let result = await window.fetchAPI(data.date)
      console.log('setting times to ', result)
      updateAvailableTimes({type:"update", times: result})
    }

    setFormData(data)
  }

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (window.submitAPI) {
      setLoading(true);
      window.submitAPI(formData).then(() => {
        navigate('/successful-booking')
      })
    }
  }

  return (loading ? <Submitting /> : (<form onSubmit={handleSubmit} className="booking-form">
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

      {formData.date !== '' && availableTimes.length == 0 ? (<span style={{fontWeight: 'bold', textAlign: 'center'}}>We are sorry. No time slots available on this day.</span>) : ""}

    <div>
      <label htmlFor="time">
        Choose Time
      </label>

      <Select id="time" onChange={handleChange} name="time">
        <Select.Option value="">-- Time --</Select.Option>
        {availableTimes && availableTimes.length > 0 && availableTimes.map((value) => (<Select.Option key={value} value={value}>{value}</Select.Option>))}
      </Select>
    </div>

    <div>
      <label htmlFor="occassion">
        occassion:
      </label>
      <Select id="occassion" onChange={handleChange} name="occassion">
        <Select.Option value="">-- Occassion --</Select.Option>
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
      <button disabled={formData.guests === "" || formData.name === "" || formData.date === '' || formData.occassion === ''} type="submit">Make Your Reservation</button>
    </div>
  </form>
  ))
}

