import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import DarkMode from '../components/DarkMode';
import BottomMenuBar from '../components/BottomMenuBar';
import { getAllSportsData } from '../helpers';
import type { Sport, ColorScheme } from '../interfaces';
import {
  StyledHomeContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledText,
  StyledCardContainer,
} from './styles/Home.styles';

const match = {
  right: 'like',
  left: 'dislike',
};

const Home = ({ colorScheme, setColorScheme }: ColorScheme) => {
  const { pathname } = useLocation();
  const [sports, setSports] = useState<Sport[]>([]);

  const handleSwipe = (direction, index) => {
    console.log({ sportMatch: match[direction], sport: sports[index] });
  };

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
        <StyledCardContainer>
          {sports?.map((sport, index) => (
            <Card key={sport.idSport} index={index} onSwipe={handleSwipe}>
              <StyledImageContainer $src={sport.strSportThumb}>
                <StyledTextContainer>
                  <StyledText>{sport.strSport}</StyledText>
                </StyledTextContainer>
              </StyledImageContainer>
            </Card>
          ))}
        </StyledCardContainer>
      </StyledHomeContainer>
      <BottomMenuBar $path={pathname} />
    </Layout>
  );
};

export default Home;
