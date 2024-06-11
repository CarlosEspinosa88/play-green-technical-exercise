import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';
import Layout from '../components/Layout';
import Card from '../components/Card';
import DarkMode from '../components/DarkMode';
import BottomMenuBar from '../components/BottomMenuBar';
import { getAllSportsData, storeFirestoreData } from '../helpers';
import { useAuth } from '../hooks/useAuth';
import {
  StyledText,
  StyledHomeContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledCardContainer,
  StyledIconHeartContainer,
  StyledIconDislikeContainer,
  StyledIconsContainer,
} from './styles/Home.styles';
import type { Sport, ColorScheme } from '../interfaces';

const match = {
  right: 'likes',
  left: 'dislikes',
};

const Home = ({ colorScheme, setColorScheme }: ColorScheme) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const [sports, setSports] = useState<Sport[]>([]);

  const handleSwipe = (direction, index) => {
    const sportData = {
      idSport: sports[index]?.idSport,
      sportMatch: match[direction],
      strSport: sports[index]?.strSport,
      strSportThumb: sports[index]?.strSportThumb,
    };

    storeFirestoreData(auth?.user?.id, sportData);
  };

  useEffect(() => {
    async function handleAllSports() {
      const getData = await getAllSportsData();
      setSports(getData?.sports);
    }

    handleAllSports();
  }, []);

  useEffect(() => {
    const userTimeout = setTimeout(() => {
      !auth?.isLogged && navigate('/');
    }, 100);

    return () => clearTimeout(userTimeout);
  }, [auth?.isLogged, navigate]);

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
      <StyledIconsContainer>
        <StyledIconDislikeContainer>
          <FiX size={25} />
        </StyledIconDislikeContainer>
        <StyledIconHeartContainer>
          <BsFillHeartFill size={28} />
        </StyledIconHeartContainer>
      </StyledIconsContainer>
      <BottomMenuBar $path={pathname} />
    </Layout>
  );
};

export default Home;
