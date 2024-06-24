// pages/signup.js
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const SignUp = () => {
  const [username, setUserName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-dog-walking.onrender.com/api/auth/local/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );

      if (response.status === 200 || response.status === 201) {
        router.push("/login/login");
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("An error occurred:", error.response);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
