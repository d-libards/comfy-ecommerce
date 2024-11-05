import { customFetch } from '../utils';

const url = '/products';

const productLoader = async () => {
  try {
    const response = await customFetch.get(url);

    return { products: response.data.data, meta: response.data.meta };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default productLoader;
