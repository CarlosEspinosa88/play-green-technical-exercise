import { useEffect, useState } from 'react';
import { getAllSportsData } from '../helpers/api';
import type { Sport } from '../interfaces';

const Home = () => {
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    async function handleAllSports() {
      const getData = await getAllSportsData();
      setSports(getData.sports);
    }

    handleAllSports();
  }, []);

  return (
    <div>
      Home View
      <div>
        {sports?.map((sport) => (
          <div key={sport.idSport}>
            <h3>{sport.strSport}</h3>
            <p>{sport.strSportDescription}</p>
            <img alt={sport.strSportIconGreen} src={sport.strSportIconGreen} />
            <img alt={sport.strSportThumb} src={sport.strSportThumb} />
            <img alt={sport.strSportThumbBW} src={sport.strSportThumbBW} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
