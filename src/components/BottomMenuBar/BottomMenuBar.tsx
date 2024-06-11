import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { RiHomeFill, RiCompass4Fill } from 'react-icons/ri';
import { useAuth } from '../../hooks/useAuth';
import { StyledBottomBarContainer, StyledMenuButton } from './BottomMenuBar.styles';

const BottomMenuBar = ({ $path }: { $path: string }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    auth?.logoutUser();
    setTimeout(() => {
      navigate('/');
    }, 100);
  }
  return (
    <StyledBottomBarContainer>
      <Link to={'/home'}>
        <StyledMenuButton $path={$path === '/home'}>
          <RiHomeFill size={20} />
        </StyledMenuButton>
      </Link>
      <Link to={'/history'}>
        <StyledMenuButton $path={$path === '/history'}>
          <RiCompass4Fill size={20} />
        </StyledMenuButton>
      </Link>
      <StyledMenuButton onClick={handleLogout}>
        <FiLogOut size={20} />
      </StyledMenuButton>
    </StyledBottomBarContainer>
  );
};

export default BottomMenuBar;
