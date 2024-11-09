import { customFetch } from '../utils';

const url = '/products?featured=true';

const featuredProductQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

const landingLoader = (queryClient) => async () => {
  try {
    const response = await queryClient.ensureQueryData(featuredProductQuery);

    const products = response.data.data;
    return { products };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export default landingLoader;
