import { FormInput, SubmitBtn } from '../components';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { customFetch } from '../utils';
import { loginUser } from '../features/user/userSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      dispatch(loginUser(response.data));
      toast.success('welcome guest user');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error.please try later.');
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold uppercase tracking-wider">
          Login
        </h4>
        <FormInput label="email" type="email" name="identifier" />
        <FormInput label="password" type="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-block btn-secondary mt-2 uppercase"
          onClick={loginAsGuestUser}
        >
          Guest User
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            className="ml-2 link link-hover link-primary capitalize"
            to="/register"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
