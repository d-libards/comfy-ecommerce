import { customFetch } from '../utils';

const url = '/products?featured=true';

const landingLoader = async () => {
  try {
    const response = await customFetch.get(url);
    const products = response.data.data;
    return { products };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default landingLoader;
