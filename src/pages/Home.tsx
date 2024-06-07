import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getAllSportsData } from '../helpers';
import { useAuth } from '../hooks/useAuth';
import type { Sport, ColorScheme } from '../interfaces';

const StyledHome = styled.div<{ $small?: boolean }>`
  ${({ theme }) => `
    background-color: ${theme.otherColors.primary};
    color: ${theme.colors.header};
  `};
  padding: ${(props) => (props.$small ? '100px' : '10px')};
`;

const Home = ({ colorScheme, setColorScheme }: ColorScheme) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [sports, setSports] = useState<Sport[]>([]);

  function handleMode() {
    colorScheme === 'light' ? setColorScheme('dark') : setColorScheme('light');
  }

  function handleLogout() {
    auth?.logoutUser();
    setTimeout(() => {
      navigate('/');
    }, 100);
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
      <p>{auth?.isLogged ? 'User logged' : 'User not logged'}</p>
      <button onClick={handleLogout}>LOGOUT</button>
      <button onClick={handleMode}>MODE</button>
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
