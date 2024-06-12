import type { InputType } from '../../interfaces';
import { StyledInputContainer, StyledLabelWrapper, StyledLabel, StyledInput, StyledInputWrapper } from './Input.styles';

const Input = ({ label, type, name, id, placeholder, value, onChange, onBlur }: InputType) => {
  return (
    <StyledInputContainer>
      <StyledLabelWrapper>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </StyledLabelWrapper>
      <StyledInputWrapper>
        <StyledInput
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </StyledInputWrapper>
    </StyledInputContainer>
  );
};

export default Input;
