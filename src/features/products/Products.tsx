import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { Product, useGetProductsQuery } from '@/services/apiSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectCount } from '../counter/counterSlice';

const Products: React.FC = () => {
    const globalCount = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [numberOfProducts, setNumberOfProducts] = React.useState(globalCount);
    const { data, isError, isLoading, isSuccess } = useGetProductsQuery(numberOfProducts);

    useEffect(() => {
        setNumberOfProducts(globalCount);
      }, [globalCount]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfProducts(Number(event.target.value));
      };
    
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
                onChange={handleChange}
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
