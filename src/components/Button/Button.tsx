import { ButtonStyled } from './Button.styles';
import type { ButtonType } from '../../interfaces';

const Button = ({ type, value }: ButtonType) => {
  return (
    <ButtonStyled type={type} value={value}>
      {value}
    </ButtonStyled>
  );
};

export default Button;
