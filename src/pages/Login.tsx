import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  StyledMainContainer,
  StyledHeaderOne,
  StyledHeaderThree,
  StyledLoginContainer,
  StyledFormContainer,
  StyledErrorContainer,
  StyledErrorMessage,
  StyledSignUpButton,
  StyledCredentialContainer,
} from './styles/Login.styles';

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [signUpUser, setSignUpUser] =useState(false)
  const [errorSingIn, setErrorSingIn] = useState(false)

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
      setErrorSingIn(false)
      signUpUser ? auth?.signupUser(values) : auth?.loginUser(values);
    },
  });

  function handleSignUp() {
    setErrorSingIn(false)
    signUpUser ? setSignUpUser(false) : setSignUpUser(true)
  }

  useEffect(() => {
    const userTimeout = setTimeout(() => {
      auth?.isLogged && navigate('/');
    }, 100);

    return () => clearTimeout(userTimeout);
  }, [auth?.isLogged, navigate]);

  useEffect(() => {
    if (auth?.isLoggedError?.includes('invalid-credential')) {
      setErrorSingIn(true)
    }
  }, [auth?.isLoggedError])

  return (
    <Layout>
      <StyledMainContainer>
        <StyledLoginContainer>
          <StyledHeaderOne>{signUpUser ? 'Sign Up' : 'Welcome'}</StyledHeaderOne>
          <StyledHeaderThree>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledHeaderThree>
          {errorSingIn && (
            <StyledCredentialContainer>
              <StyledErrorMessage>Error authentication or invalid credential{" "}</StyledErrorMessage>
              <StyledErrorMessage>You should sign up, please</StyledErrorMessage>
            </StyledCredentialContainer>
          )}
          <form onSubmit={formik.handleSubmit}>
            <StyledFormContainer>
              <Input
                label="User"
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
              />
              <StyledErrorContainer>
                {formik.touched.email && formik.errors.email ? (
                  <StyledErrorMessage>{formik.errors.email}</StyledErrorMessage>
                ) : null}
              </StyledErrorContainer>
              <Input
                label="Password"
                type="password"
                name="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
              />
              <StyledErrorContainer>
                {formik.touched.password && formik.errors.password ? (
                  <StyledErrorMessage>{formik.errors.password}</StyledErrorMessage>
                ) : null}
              </StyledErrorContainer>
              <StyledSignUpButton onClick={handleSignUp}>{signUpUser ?  'Login?' :'Sign Up?'  }</StyledSignUpButton>
              <div>
                <Button type="submit" value={signUpUser ? 'Sign Up' : 'Login'} />
              </div>
            </StyledFormContainer>
          </form>
        </StyledLoginContainer>
      </StyledMainContainer>
    </Layout>
  );
};

export default Login;
