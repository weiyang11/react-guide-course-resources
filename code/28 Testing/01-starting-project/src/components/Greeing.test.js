import { render,screen } from '@testing-library/react';
import Greeting from "./Greeting";

describe('Greeting component',()=>{
  test('renders Hello world as a text', ()=>
    {
      render(<Greeting />);
      const helloWordElement = screen.getByText('Hello World', {exact: false});
      expect(helloWordElement).toBeInTheDocument();
    });
    
})
