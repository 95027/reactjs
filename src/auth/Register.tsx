import React, { useState } from 'react'
import instance from '../axios';

const Register = () => {

  const [formData, setFormData] = useState({
    name: 'sai',
    email: 'sai@mail.com',
    password: 'password',
  });

  const { name, email, password } = formData;

  const changeHandler = (e: any) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  const submitHandler = async (e: any) => {

    e.preventDefault();

    const res = await instance.post('/auth/register', formData);

    if (res.data) {
      alert('success')
    }

  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={changeHandler}
            name='name'
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={changeHandler}
            name='email'
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            name='password'
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
