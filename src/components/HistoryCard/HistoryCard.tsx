import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { FiX } from 'react-icons/fi';
import {
  StyledCardHistoryContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledText,
  StyledIcon,
} from './HistoryCard.styles';
import type { SportHistoryType } from '../interfaces';

const HistoryCard = ({ sport }: SportHistoryType) => {
  return (
    <StyledCardHistoryContainer>
      <StyledImageContainer $src={sport.strSportThumb}>
        <StyledTextContainer>
          <StyledText>{sport.strSport}</StyledText>
        </StyledTextContainer>
      </StyledImageContainer>
      {sport.sportMatch === 'likes' ? (
        <StyledIcon $icon={sport.sportMatch}>
          <BsFillHeartFill size={21} />
        </StyledIcon>
      ) : (
        <StyledIcon $icon={sport.sportMatch}>
          <FiX size={25} />
        </StyledIcon>
      )}
    </StyledCardHistoryContainer>
  );
};

export default HistoryCard;
