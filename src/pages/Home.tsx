import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import DarkMode from '../components/DarkMode';
import BottomMenuBar from '../components/BottomMenuBar';
import { getAllSportsData, storeFirestoreData } from '../helpers';
import type { Sport, ColorScheme } from '../interfaces';
import {
  StyledText,
  StyledHomeContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledCardContainer,
} from './styles/Home.styles';

const match = {
  right: 'likes',
  left: 'dislikes',
};

const Home = ({ colorScheme, setColorScheme }: ColorScheme) => {
  const { pathname } = useLocation();
  const [sports, setSports] = useState<Sport[]>([]);

  const handleSwipe = (direction, index) => {
    const sportData = {
      sportMatch: match[direction],
      strSport: sports[index]?.strSport,
      strSportThumb: sports[index]?.strSportThumb,
    };
    storeFirestoreData(sportData);
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
