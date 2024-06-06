import * as Yup from 'yup';
import { useFormik } from 'formik';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  StyledHeaderOne,
  StyledHeaderThree,
  StyledLoginContainer,
  StyledFormContainer,
  StyledErrorContainer,
  StyledErrorMessage,
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

            {/* Button Component */}
            <div>
              <Button type="submit" value="Login" />
            </div>
          </StyledFormContainer>
        </form>
      </StyledLoginContainer>
    </Layout>
  );
};

export default Login;
