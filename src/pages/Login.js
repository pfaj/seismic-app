import '../css/login.css'
import * as authService from '../services/authService.js'

import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      document.getElementById('errorField').innerHTML = '';
      if(!username & !password){
        throw new Error('Invalid username or password');
      }
      else if (!username){
        throw new Error('Invalid username');
      }
      else if (!password){
        throw new Error('Invalid password');
      }
      else if(username == "admin" | password == "admin"){
        throw new Error('Attempted admin login');
      }else{
        // console.log("Username:" + username)
        // console.log("Password:" + password)
        const authBody = {
          username,
          password
        };

        // console.log("Make request")
        // console.log(authBody)
        const res = await authService.authenticate(authBody);
        console.log("Res: ", res);
        if(res.auth){
          localStorage.setItem("JWT", res.jwt);

        }else{
          localStorage.setItem("JWT", 'not authorized');
          throw new Error('Unauthorized Access');
        }

      }
    }
    catch(e){
      //NOTE: find a way to make a logging system for when logins are attempted with the
      // login info that was used
      console.error(e);
      document.getElementById('errorField').innerHTML = 'Invalid username or password please try again';
    }
  };

  return (
    <>
      <div className="login">
        <form className='loginContainer' onSubmit={handleSubmit}>
          <div>
            <img className='loginLogo' src="../images/logoLight.webp" alt=""/>
          </div>

          <label className="loginLabel" htmlFor="username">Username</label>
          <input 
            className='loginInput' 
            id='username'
            placeholder='Username' 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="loginLabel" htmlFor="password">Password</label>
          <input 
            className='loginInput' 
            id='password'
            placeholder='Password' 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id='errorField'></div>
          <button className='button' type='submit'>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
