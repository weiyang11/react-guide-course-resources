import {useState} from 'react';

export default function Login() {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [enterValues, setEnterValues] = useState({
    email: '',
    password: ''
  });


  function handleSubmit(e){
    e.preventDefault();


  }

  function handleEmailChange(e){
    setEmail(e.target.value);
  }

  function handleInputChange(identifier, value){
    setEnterValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"  onChange={(event)=> handleInputChange('email', event.target.value)}  value={enterValues.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=> handleInputChange('password', event.target.value)}  value={enterValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
