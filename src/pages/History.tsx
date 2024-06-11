import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import Layout from '../components/Layout';
import BottomMenuBar from '../components/BottomMenuBar';
import HistoryCard from '../components/HistoryCard';
import { useAuth } from '../hooks/useAuth';
import { readFirestoreData } from '../helpers';
import {
  StyledHistoryContainer,
  StyledIconContainer,
  StyledHeaderTwo,
  StyledCardsContainer,
  StyledHeaderDescription,
} from './styles/History.styles';
import type { SportHistoryType } from '../interfaces';

const History = () => {
  const auth = useAuth();
  const { pathname } = useLocation();
  const [historySports, setHistorySports] = useState([]);

  useEffect(() => {
    if (auth?.isLogged) {
      readFirestoreData(auth?.user?.id, setHistorySports);
    }
  }, [auth?.user?.id, auth?.isLogged]);

  return (
    <Layout>
      <Link to={'/home'}>
        <StyledIconContainer>
          <IoArrowBack size={25} />
        </StyledIconContainer>
      </Link>
      <StyledHistoryContainer>
        <StyledCardsContainer>
          <StyledHeaderTwo>History</StyledHeaderTwo>
          <StyledHeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledHeaderDescription>
          {historySports?.map((sport: SportHistoryType, index) => (
            <HistoryCard key={`${sport.idSport}-${index}`} sport={sport} />
          ))}
        </StyledCardsContainer>
      </StyledHistoryContainer>
      <BottomMenuBar $path={pathname} />
    </Layout>
  );
};

export default History;
