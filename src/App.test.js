import { render, screen } from '@testing-library/react';
import App from './App';
import { BookingForm } from './components/BookingForm';
import { BrowserRouter } from 'react-router-dom';

test('reserve a table CTA link', () => {
  render(<App />);
  const linkElement = screen.getByText(/reserve a table/i);

  expect(linkElement.href).toMatch(/\/book$/);
  expect(linkElement).toBeInTheDocument();
});

test('reservations link', () => {
  render(<App />);
  const linkElement = screen.getByText(/reservations/i);

  expect(linkElement.href).toMatch(/\/book$/);
  expect(linkElement).toBeInTheDocument();
});

test('online menu link', () => {
  render(<App />);
  const linkElement = screen.getByText(/online menu/i);

  expect(linkElement).toBeInTheDocument();
});


test('submit link', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  )
  const linkElement = screen.getByText(/make your reservation/i);

  expect(linkElement).toBeInTheDocument();
});

test('input elements on start', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  )

  const name = screen.getByLabelText('Name')
  expect(name).toBeInTheDocument()

  const time = screen.getByLabelText('Choose Time')
  expect(time).toBeInTheDocument()

  const date = screen.getByLabelText('Choose Time')
  expect(date).toBeInTheDocument()

  const occassion = screen.getByLabelText('Occassion')
  expect(occassion).toBeInTheDocument()

  const guests = screen.getByLabelText('Number of Guests')
  expect(guests).toBeInTheDocument()

  const submit = screen.getByText(/make your reservation/i);
  expect(submit).toBeDisabled()

});
