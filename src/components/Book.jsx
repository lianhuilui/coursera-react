import { useState } from "react";
import { Select } from "./Select"

export function Book() {
  let [form, setForm] = useState({ name: "Your name", occasion: "" })

  function handleChange(e) {
    e.preventDefault();

    let { name, value } = e.target;

    let data = { ...form }
    data[name] = value

    setForm(data)
  }

  return (
    <div className="bg-primary py-4">
      <div className="container py-4">
        <h1>Book a table</h1>

        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={form.name} name="name" onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="occasion">
              Occasion:
            </label>
            <Select id="occasion" onChange={handleChange} name="occassion">
              <Select.Option value="birthday">Birthday</Select.Option>
              <Select.Option value="anniversary">Anniversary</Select.Option>
            </Select>
          </div>
        </form>

        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia cupiditate omnis numquam pariatur. Fuga dolore voluptas molestias, nulla blanditiis itaque possimus quidem ducimus! Vel est architecto aliquid deleniti nam.</div>
      </div>
    </div>
  );
}
