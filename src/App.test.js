import { render, screen } from '@testing-library/react';
import App from './App';
import { BookingForm } from './components/BookingForm';

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

test('submit link', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText(/make your reservation/i);

  expect(linkElement).toBeInTheDocument();
});

