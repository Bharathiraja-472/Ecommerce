import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Velvora brand header logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/Velvora/i);
  expect(logoElement).toBeInTheDocument();
});
