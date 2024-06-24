import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial state set to false
  const router = useRouter();

  useEffect(() => {
    // Check if running in client-side environment and retrieve token from localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token); // Set isLoggedIn based on token existence
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <p className="text-white text-2xl font-bold cursor-pointer">Dog Walking Site</p>
          </Link>
        </div>
        <div className="flex gap-20">
          {isLoggedIn ? (
            <button className="text-white" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link href="/login/login">
              <p className="text-white hover:underline">Login</p>
            </Link>
          )}
          <Link href="/signup/signup">
            <p className="text-white hover:underline">Sign Up</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
