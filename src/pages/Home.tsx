import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import DarkMode from '../components/DarkMode';
import BottomMenuBar from '../components/BottomMenuBar';
import { getAllSportsData } from '../helpers';
import type { Sport, ColorScheme } from '../interfaces';
import { StyledHomeContainer, StyledImageContainer, StyledTextContainer, StyledText } from './styles/Home.styles';

const Home = ({ colorScheme, setColorScheme }: ColorScheme) => {
  const { pathname } = useLocation();
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    async function handleAllSports() {
      const getData = await getAllSportsData();
      setSports(getData.sports);
    }

    handleAllSports();
  }, []);

  return (
    <Layout>
      <StyledHomeContainer>
        <DarkMode colorScheme={colorScheme} setColorScheme={setColorScheme} />
        {sports?.map((sport) => (
          <div key={sport.idSport}>
            <StyledImageContainer $src={sport.strSportThumb} />
            <StyledTextContainer>
              <StyledText>{sport.strSport}</StyledText>
            </StyledTextContainer>
          </div>
        ))}
      </StyledHomeContainer>
      <BottomMenuBar $path={pathname} />
    </Layout>
  );
};

export default Home;
