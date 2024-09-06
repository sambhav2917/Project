/* import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './Signup.css';

function Signup() {
  const navigate = useNavigate(); 
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Email: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", user);
      setMessage(response.data.message);

      if (response.data.message === "User registered successfully") {
        navigate("/login"); // Redirect to the Login page
      }
    } catch (error) {
      setMessage("Signup failed");
    }
  };

  return (
    <>
      <div id="form">
        <form onSubmit={handleSubmit} className="register-form" id="register-form">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>A short sentence describing what someone will receive by subscribing</p>

          <div id="name">
            <input
              type="text"
              id="Firstname"
              name="Firstname"
              value={user.Firstname}
              onChange={handleChange}
              placeholder='FIRST NAME'
              required
            />

            <input
              type="text"
              id="Lastname"
              name="Lastname"
              value={user.Lastname}
              onChange={handleChange}
              placeholder='LAST NAME'
              required
            />
          </div>

          <input
            type="text"
            id="Email"
            name="Email"
            value={user.Email}
            onChange={handleChange}
            placeholder='EMAIL HERE'
            required
          />
          <button type="submit" className="form-submit">SIGN UP</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default Signup;
 */


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './Signup.css';

function Signup() {
  const navigate = useNavigate(); 
  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    password: ""  // Add password to the state
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", user);
      setMessage(response.data.message);

      if (response.data.message === "User registered successfully") {
        navigate("/login"); // Redirect to the Login page
      }
    } catch (error) {
      setMessage("Signup failed");
    }
  };

  return (
    <>
      <div id="form">
        <form onSubmit={handleSubmit} className="register-form" id="register-form">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>A short sentence describing what someone will receive by subscribing</p>

          <div id="name">
            <input
              type="text"
              id="Firstname"
              name="Firstname"
              value={user.Firstname}
              onChange={handleChange}
              placeholder='FIRST NAME'
              required
            />

            <input
              type="text"
              id="Lastname"
              name="Lastname"
              value={user.Lastname}
              onChange={handleChange}
              placeholder='LAST NAME'
              required
            />
          </div>

          <input
            type="text"
            id="Email"
            name="Email"
            value={user.Email}
            onChange={handleChange}
            placeholder='EMAIL HERE'
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder='PASSWORD'
            required
          />

          <button type="submit" className="form-submit">SIGN UP</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default Signup;
