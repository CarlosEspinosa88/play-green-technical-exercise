import * as Yup from 'yup';
import { useFormik } from 'formik';

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
    <div>
      <h1>Welcome</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">User*</label>
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

        <label htmlFor="password">Password*</label>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
