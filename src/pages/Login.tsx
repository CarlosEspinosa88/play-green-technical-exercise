import * as Yup from 'yup';
import { useFormik } from 'formik';
import Layout from '../components/Layout';
import {
  StyledHeaderOne,
  StyledHeaderThree,
  StyledLoginContainer,
  StyledFormContainer,
  StyledInputContainer,
  StyledLabelWrapper,
  StyledLabel,
} from './styles/Login.styles';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('The email is not valid').required('The email is required'),
      password: Yup.string().required('Password is required').min(6, 'The password must be 6 characters'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Layout>
      <StyledLoginContainer>
        <StyledHeaderOne>Welcome</StyledHeaderOne>
        <StyledHeaderThree>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledHeaderThree>
        <form onSubmit={formik.handleSubmit}>
          <StyledFormContainer>
            <StyledInputContainer>
              <StyledLabelWrapper>
                <StyledLabel htmlFor="email">User*</StyledLabel>
              </StyledLabelWrapper>
              <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
              />
              <div>
                {formik.touched.email && formik.errors.email ? (
                  <div>
                    <p>Error</p>
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>
            </StyledInputContainer>

            <StyledInputContainer>
              <StyledLabelWrapper>
                <StyledLabel htmlFor="password">Password*</StyledLabel>
              </StyledLabelWrapper>
              <input
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
              />
              <div>
                {formik.touched.password && formik.errors.password ? (
                  <div>
                    <p>Error</p>
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
              </div>
            </StyledInputContainer>

            <div>
              <input type="submit" value="Login" />
            </div>
          </StyledFormContainer>
        </form>
      </StyledLoginContainer>
    </Layout>
  );
};

export default Login;
