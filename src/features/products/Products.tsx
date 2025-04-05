import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { Product, useGetProductsQuery } from '@/services/apiSlice';
import { useAppSelector } from '@/app/hooks';
import { selectCount } from '../counter/counterSlice';

const Products: React.FC = () => {
    const numberOfProducts = useAppSelector(selectCount);
    // const [numberOfProducts, setNumberOfProducts] = React.useState(count);
    const dispatch = useDispatch();
    const { data, isError, isLoading, isSuccess } = useGetProductsQuery(numberOfProducts);

    
    if (isError) {
        return (
          <div>
            <h1>There was an error!!!</h1>
          </div>
        )
      }
    
      if (isLoading) {
        return (
          <div>
            <h1>Loading...</h1>
          </div>
        )
      }

      if(isSuccess) {
        return (
            <div className="products-container">
            <h2>Products</h2>
            <label>
                Number of Products:
                <input
                type="number"
                value={numberOfProducts}
                onChange={(e) => setNumberOfProducts(Number(e.target.value))}
                />
            </label>
            <div className="products-grid">
                {data.products.map((product: Product) => (
                <div key={product.id} className="product-card">
                    <h3>{product.title} - ${product.price}</h3>
                </div>
                ))}
            </div>
            </div>
        );
      }
};

export default Products;
