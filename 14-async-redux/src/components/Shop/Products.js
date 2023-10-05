import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 1, name: "book", price: 6, description: "lorem ipsum" },
  { id: 2, name: "book2", price: 3, description: "lorem ipsum" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => 
          <li key={product.id}>
            <ProductItem
              title={product.name}
              price={product.price}
              description={product.description}
              id={product.id}
            />
          </li>
        )}
      </ul>
    </section>
  );
};

export default Products;
