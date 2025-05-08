import '../css/login.css'
import * as authService from '../services/authService.js'

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      document.getElementById('errorField').innerHTML = '';
      if (!username & !password) {
        throw new Error('Invalid username or password');
      }
      else if (!username) {
        throw new Error('Invalid username');
      }
      else if (!password) {
        throw new Error('Invalid password');
      }
      else if (username == "admin" | password == "admin") {
        throw new Error('Attempted admin login');
      } else {
        const authBody = {
          username,
          password
        };

        const res = await authService.authenticate(authBody);
        console.log("Res: ", res);
        if (res.auth) {
          localStorage.setItem("JWT", res.jwt);
          const from = location.state?.from || "/";
          navigate(from, { replace: true });

        } else {
          localStorage.setItem("JWT", 'not authorized');
          throw new Error('Unauthorized Access');
        }

      }
    }
    catch (e) {
      //NOTE: find a way to make a logging system for when logins are attempted with the
      // login info that was used
      console.error(e);
      document.getElementById('errorField').innerHTML = 'Invalid username or password please try again';
    }
  };

  return (
    <>
      <div className="login">
        <form className='loginContainer' encType='multipart/form-data' onSubmit={handleSubmit}>
          <div>
            <img className='loginLogo' src="../images/logoLight.webp" alt="" />
          </div>

          <label className="loginLabel" htmlFor="username">Username</label>
          <input
            className='loginInput'
            id='username'
            placeholder='Username'
            type="text"
            autoFocus={true}
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
