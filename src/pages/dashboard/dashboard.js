import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '@/components/Nav';

const Dashboard = () => {
  const [dogs, setDogs] = useState([]);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDogs = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId'); // Retrieve the user ID from localStorage
  
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }
  
      try {
        const response = await axios.get('http://localhost:1337/api/dogs', {
          params: {
            'filters[users_permissions_user][id][$eq]': userId, // Use correct relation field
          },
          headers: { Authorization: `Bearer ${token}` },
        });
        const dogsData = response.data.data || []; // Use default empty array if no data
        setDogs(dogsData);
        console.log(dogsData);
      } catch (error) {
        console.error('Error fetching dogs:', error.response ? error.response.data : error.message);
      }
    };
  
    fetchDogs();
  }, []);
  
  


  const handleAddDog = async (e) => {
   // e.preventDefault();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

    try {
      const response = await axios.post(
        'http://localhost:1337/api/dogs',
        {
          data: {
            name: name,
            breed: breed,
            age: age,
            user_permissons_user: userId
          },
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setName('');
      setBreed('');
      setAge('');
      console.log(response);
      fetchDogs();
    } catch (error) {
      console.error('Error adding dog:', error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <div>
      <Nav/>
      <h1 className="text-6xl font-bold text-center">Dashboard</h1>
      <h2 className="text-3xl font-bold text-center">Your Dog Profiles</h2>
      <div className="w-full  border grid grid-cols-1 lg:grid-cols-3 ">
        {dogs?.length === 0 ? (
          <p className="text-center text-red-500">Add a dog using the form below.</p>
        ) : (
          dogs?.map((dog, idx) => (
            <div className="border w-full" key={idx}>
              <p className="text-xl p-5 font-bold border">Name: {dog.attributes.name}</p>
              <p className="text-xl p-5 font-bold border">Breed: {dog.attributes.breed}</p>
              <p className="text-xl p-5 font-bold border">Age: {dog.attributes.age}</p>
            </div>
          ))
        )}
      </div>

      <h3 className="text-3xl font-bold text-center  ">Add a dog </h3>
      <div className="flex items-center justify-center">
        <form className="flex flex-col mt-20" onSubmit={handleAddDog}>
          <input className="border w-72 h-12 rounded-sm" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Dog Name" required />
          <input className="border w-72 h-12 rounded-sm" type="text" value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Breed" required />
          <input className="border w-72 h-12 rounded-sm" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
          <button className="bg-black text-white p-2 w-full mt-2 rounded-sm" type="submit">Add Dog</button>
        </form>
      </div>

      <div className="w-full h-20">
        <h2 className="text-3xl text-center">Request a Walk</h2>
        <iframe src="https://calendly.com/shariqahmed" width="100%" height="600px" frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
