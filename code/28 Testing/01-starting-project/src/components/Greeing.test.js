import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('Greeting component',()=>{
  test('renders Hello world as a text', ()=>
    {
      render(<Greeting />);
      const helloWordElement = screen.getByText('Hello World', {exact: false});
      expect(helloWordElement).toBeInTheDocument();
    });

  test('renders "good to see you" if the button was not clicked', ()=>
    {
      render(<Greeting />);
      const paragraphElement = screen.getByText('good to see you', {exact: false});
      expect(paragraphElement).toBeInTheDocument();
    });

  test('renders "Changed" if the button was clicked', ()=>
    {
      render(<Greeting />);
      const buttonElement = screen.getByRole('button');
      // buttonElement.click();
      userEvent.click(buttonElement);
      const paragraphElement = screen.getByText('Changed', {exact: false});
      expect(paragraphElement).toBeInTheDocument();
    });

  test('does not render "good to see you" if the button was clicked', ()=>
    {
      render(<Greeting />);
      const buttonElement = screen.getByRole('button');
      userEvent.click(buttonElement);
      const paragraphElement = screen.queryByText('good to see you', {exact: false});
      expect(paragraphElement).toBeNull();
    });

})
