import { useLoaderData } from 'react-router-dom';
import { Filters, ProductsContainer, PaginationContainer } from '../components';

const Products = () => {
  const { products, meta } = useLoaderData();
  console.log(meta);

  return (
    <section>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </section>
  );
};
export default Products;
