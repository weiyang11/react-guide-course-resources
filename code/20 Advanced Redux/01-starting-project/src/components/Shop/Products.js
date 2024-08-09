import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {

  const DUMMY_PRODUCT = [{
    id: 'p1',
    price: 6,
    title: "My First Book",
    description: "The first book i ever wrote"
  },
  {
    id: 'p2',
    price: 4,
    title: "My Second Book",
    description: "The second book i ever wrote"
  }

]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
