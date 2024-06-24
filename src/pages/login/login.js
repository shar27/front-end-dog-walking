// pages/login.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      });

      if (response.data.jwt) {
        // Store JWT token in localStorage
        localStorage.setItem('token', response.data.jwt);

        // Fetch user details to get userId
        const userResponse = await axios.get('http://localhost:1337/api/users/me', {
          headers: { Authorization: `Bearer ${response.data.jwt}` }
        });

        if (userResponse.data.id) {
          // Store userId in localStorage
          localStorage.setItem('userId', userResponse.data.id);
          console.log(userResponse.data.id);
        }

        // Redirect to dashboard after successful login
        router.push('/dashboard/dashboard');
      }
    } catch (error) {
      console.error('An error occurred:', error.response);
    }
  };
  return (
    <div>
            <h2 className="text-3xl font-bold text-center">Login</h2>
   
    <div className="flex items-center justify-center h-screen">

    <form className="flex flex-col p-5 border w-96" onSubmit={handleLogin}>
      <input className="border w-full p-3 rounded-sm" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input className="border w-full p-3 rounded-sm" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button className=" bg-black text-white rounded-sm w-full p-2" type="submit">Login</button>
    </form>
    </div>
    </div>
  );
};

export default Login;
