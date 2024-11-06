import { useLoaderData } from 'react-router-dom';
import { Filters, ProductsContainer, PaginationContainer } from '../components';
import ProductsList from '../components/ProductsList';

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
