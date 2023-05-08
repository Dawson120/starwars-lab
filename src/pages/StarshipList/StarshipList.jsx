import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllStarships } from '../../services/sw-api';
import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([]);

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships();
      setStarshipList(starshipData);
    };
    fetchStarshipList();
  }, []);

  return (
    <main>
      <h1>This is the Starship List</h1>
      {starshipList.map(starship => (
        <div className='link-div' key={starship.name}>
          <Link className='starshiplink' to={`${starship.url.slice('21')}`}>{starship.name}</Link>
        </div>
      ))}
    </main>
  );
};

export default StarshipList;
