import { styled } from 'styled-components';

export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledFormContainer = styled.div`
  > * + * {
    margin: 0.8rem 0 0 0;
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
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  font-family: 'Epilogue', sans-serif;
`;

export const StyledText = styled.p`
  font-weight: 200;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledHeaderOne = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.6rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 1rem 0;
`;

export const StyledErrorContainer = styled.div`
  margin: 0.2rem 0 0.7rem 0;
`;

export const StyledCredentialContainer = styled.div`
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

export const StyledErrorMessage = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.otherColors.error};
`;
