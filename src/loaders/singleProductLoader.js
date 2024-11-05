import { customFetch } from '../utils';

export const singleProductLoader = async ({ params }) => {
  try {
    const response = await customFetch.get(`/products/${params.id}`);
    const product = response.data.data;

    return { product };
  } catch (error) {
    console.error(error);
    return error;
  }
};
