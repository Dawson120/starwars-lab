import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStarship } from '../../services/sw-api';

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const  starshipId  = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId.id)
      setStarshipDetails(starshipData)
    };
    fetchDetails();
  }, [starshipId]);

  console.log(starshipId)


  return (
    <>
      <div>This is the Star Ship Details of {starshipDetails.name}</div>
      <div>Model: {starshipDetails.model}</div>
      <div>Occupancy: {starshipDetails.passengers}</div>
    </>
  );
};

export default StarshipDetails;
