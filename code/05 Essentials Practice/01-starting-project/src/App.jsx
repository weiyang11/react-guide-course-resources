import React from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';

function App() {


  const [userInput, setUserInput] = React.useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration:10,
    }
  );

  const inputIsValid = userInput.duration >= 1 ;


  function handleChange(InputIndentifier, NewValue){
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [InputIndentifier]: +NewValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className='center'>Please enter a valid duration which greater than 0</p>}
      {inputIsValid && <Result input={userInput} />}

    </>
  );
}

export default App
