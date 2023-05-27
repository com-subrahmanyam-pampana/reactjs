import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test("Button Test:Change button color on button click", () => {
  render(<App />);
  /*Find the button  element with a role of button and button text of 'Click Me*/
  const myButton = screen.getByRole("button", { name: "Click Me" });
  /*Initial color of button is Blue */
  expect(myButton).toHaveStyle({ backgroundColor: "green" });
  /* Now Fire click event*/
  fireEvent.click(myButton);
  /*Now button color should changes to Green */
  expect(myButton).toHaveStyle({ backgroundColor: "blue" });
});