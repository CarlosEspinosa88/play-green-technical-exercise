import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { getAllSportsData, login, logout, signup, userStatus } from '../helpers';
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
  const [isLogged, setIsLogged] = useState(false);

  function handleMode() {
    mode === 'light' ? setMode('dark') : setMode('light');
  }

  function handleLogin() {
    login(isLogged, setIsLogged);
  }

  function handleLogout() {
    logout(isLogged, setIsLogged);
  }

  useEffect(() => {
    async function handleAllSports() {
      const getData = await getAllSportsData();
      setSports(getData.sports);
    }

    handleAllSports();
  }, []);

  useEffect(() => {
    userStatus(setIsLogged);
  }, []);

  return (
    <StyledHome $small>
      <h1>Home View</h1>
      <p>{isLogged ? 'User logged' : 'User not logged'}</p>
      <button onClick={handleLogin}>LOGIN</button>
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
