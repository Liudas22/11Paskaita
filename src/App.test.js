import { render, screen } from '@testing-library/react';
import App from './App';

test("sets value", () => {
  render(<App />);
  const age = screen.getByTitle("age")
  expect(age).toHaveValue("0");
})
