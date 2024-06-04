import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { getAllSportsData } from '../helpers/api';
import type { Sport, Mode } from '../interfaces';

const StyledHome = styled.div<{ $small?: boolean }>`
  ${({ theme }) => `
    background-color: ${theme.otherColors.primary};
    color: ${theme.colors.header};
  `};
  padding: ${(props) => (props.$small ? '100px' : '10px')};
`;

const Home = ({ mode, setMode }: Mode) => {
  const [sports, setSports] = useState<Sport[]>([]);
  function handleMode() {
    mode === 'light' ? setMode('dark') : setMode('light');
  }

  useEffect(() => {
    async function handleAllSports() {
      const getData = await getAllSportsData();
      setSports(getData.sports);
    }

    handleAllSports();
  }, []);

  return (
    <StyledHome $small>
      <h1>Home View</h1>
      <button onClick={handleMode}>SET MODE</button>
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
    </StyledHome>
  );
};

export default Home;
