import { styled } from 'styled-components';

export const StyledInputContainer = styled.div`
  padding: 0.6rem 0.8rem;
  background: ${({ theme }) => theme.colors.box};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export const StyledLabelWrapper = styled.div`
  margin-bottom: 0.1rem;
`;

export const StyledLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.label};
`;

export const StyledInput = styled.input`
  appearance: none;
  box-sizing: border-box;
  display: block;
  outline: none;
  width: 100%;
  margin: 0;

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const StyledInputWrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 100%;

  ${StyledInput} {
    font-size: 1rem;
    line-height: 1rem;
    padding: 0;
    border: none;
    background: none;
    transition: all 150ms ease-out;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      border: none;
    }
  }
`;
