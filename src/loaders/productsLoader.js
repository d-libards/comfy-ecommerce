import { customFetch } from '../utils';

const url = '/products';

const productLoader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const response = await customFetch.get(url, {
      params,
    });

    return { products: response.data.data, meta: response.data.meta, params };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default productLoader;
