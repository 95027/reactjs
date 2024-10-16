import { useState } from "react";
import instance from "../axios";
import { useAuth } from "../context/AuthContext";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "sai@mail.com",
    password: "password",
  });

  const { email, password } = formData;
  const { getUserByToken } = useAuth();

  const changeHandler = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const res = await instance.post("/auth/login", formData);

    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      getUserByToken();
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={changeHandler}
            name="email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            name="password"
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div >
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Login;
