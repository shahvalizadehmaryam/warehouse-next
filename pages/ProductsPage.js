import Products from "../components/modules/Products";
import ProductHeader from "../components/modules/ProductHeader";
// eslint-disable-next-line
const ProductsPage = ({ searchVal }) => {
  return (
    <div>
      <ProductHeader />
      <Products searchVal={searchVal} />
    </div>
  );
};

export default ProductsPage;
