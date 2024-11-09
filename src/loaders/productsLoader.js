import { customFetch } from '../utils';

const url = '/products';

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch.get(url, {
        params: queryParams,
      }),
  };
};

const productLoader =
  (queryClient) =>
  async ({ request }) => {
    try {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);
      const response = await queryClient.ensureQueryData(
        allProductsQuery(params)
      );

      console.log(response);

      return { products: response.data.data, meta: response.data.meta, params };
    } catch (error) {
      console.error(error);
      return error;
    }
  };

export default productLoader;
