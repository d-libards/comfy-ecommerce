import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold uppercase tracking-wider">
          Register
        </h4>
        <FormInput label="username" type="text" name="username" />
        <FormInput label="email" type="email" name="email" />
        <FormInput label="password" type="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>

        <p className="text-center">
          Already a member?
          <Link
            className="ml-2 link link-hover link-primary capitalize"
            to="/login"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
