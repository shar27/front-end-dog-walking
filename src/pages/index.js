// pages/index.js
import Hero from '/public/assets/hero-img.jpg'
import Nav from '../components/Nav';
import Image from 'next/image';
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen ">
    
        <div className='flex items-center justify-center'>
        <div className='text-center'>
        <h1 className="text-4xl font-bold mb-4">Welcome to Dog Walker Wolverhampton</h1>
        <p className="text-lg">Your go-to place for professional dog walking services.</p>
        <button className='bg-green-800 text-white p-3 rounded-sm w-36 font-bold animate-pulse mt-5'>Sign up today</button>
        </div>
        </div>
        <div className='hidden lg:block'>
      <Image
          className='w-full h-screen'
          src={Hero}
          />
          </div>
      </div>

      {/* about */}
      <div className='p-2 leading-10 font-bold container'>
        <h3 className='text-5xl font-bold '>Who are we?</h3>
        <p className='mt-5'>My name is Joel, and I have loved dogs since I was a kid. Growing up, I always had a special bond with our family pets, and my passion for these loyal companions has only grown over the years. I want to dedicate my time and energy to providing exceptional care and enjoyable experiences for dogs and their owners. With this deep-rooted love and understanding of dogs, I'm excited to offer professional 
          dog walking services that prioritize the well-being and happiness of every dog I have the privilege to walk.</p>
      </div>
      <h4 className='text-5xl font-bold text-center'>Our walks</h4>
      <div className="flex justify-center mx-auto mt-5">
      
        {/* Your carousel implementation goes here */}
      <Carousel/>
      <Carousel/>
      <Carousel/>
      </div>
      <footer className="bg-green-800 text-white py-4 text-center">
        <p>&copy; 2024 Dog Walking Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
