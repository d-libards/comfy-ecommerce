import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold uppercase tracking-wider">
          Login
        </h4>
        <FormInput
          label="email"
          type="email"
          defaultValue="dev1@gmail.com"
          name="identifier"
        />
        <FormInput
          label="password"
          type="password"
          defaultValue="secret"
          name="password"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button className="btn btn-block btn-secondary mt-2 uppercase">
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
