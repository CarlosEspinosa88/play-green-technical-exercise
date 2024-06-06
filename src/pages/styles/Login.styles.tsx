import { styled } from 'styled-components';

export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledFormContainer = styled.div`
  > * + * {
    margin: 1rem 0 0 0;
  }
`;

export const StyledInputContainer = styled.div`
  width: 250px;
  padding: 1rem;
  background: ${({ theme }) => theme.otherColors.white};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const StyledLabelWrapper = styled.div`
  margin-bottom: 0.1em;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.label};
`;

export const StyledHeaderThree = styled.p`
  text-align: center;
  margin: 0 0 1rem 0;
  font-family: 'Epilogue', sans-serif;
`;

export const StyledHeaderOne = styled.h1`
  text-align: center;
  margin: 0 0 1rem 0;
`;
