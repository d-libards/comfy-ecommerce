import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, Header, Loading } from '../components';

const HomeLayout = () => {
  const navigate = useNavigation();
  const isLoading = navigate.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
