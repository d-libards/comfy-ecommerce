import { customFetch } from '../utils';

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};

const singleProductLoader =
  (queryClient) =>
  async ({ params }) => {
    try {
      const response = await queryClient.ensureQueryData(
        singleProductQuery(params.id)
      );
      const product = response.data.data;

      return { product };
    } catch (error) {
      console.error(error);
      return error;
    }
  };

export default singleProductLoader;
