import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  try {
    const response = await customFetch.get(url);

    const products = response.data.data;
    return { products };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts products />
    </>
  );
};
export default Landing;
