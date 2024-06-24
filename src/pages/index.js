// pages/index.js
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="hero-container bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dog Walking Site</h1>
        <p className="text-lg">Your go-to place for professional dog walking services.</p>
      </div>
      <div className="carousel-container max-w-7xl mx-auto py-12">
        {/* Your carousel implementation goes here */}
        <p>Carousel Placeholder</p>
      </div>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Dog Walking Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
