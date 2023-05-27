import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello subbu/i);
  expect(linkElement).toBeInTheDocument();
});

/* 
“render” creates a virtual DOM for the argument 
JSX and it access the virtual DOM via “screen” global
"toBeInTheDocument()" is the matcher from Jest-DOM.This is the type of assertion
"expect" is the Jest global that starts the assertion
*/