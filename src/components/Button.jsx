import Button from '@mui/material/Button';
import React from 'react';
import items from '../data/items.json';
import {useFilterConditionsState} from '../hook/useFilterConditions';

/** @param {Object} param0
 * @param {(param: import('../context').FilterType) => void} param0.filterFn
 * @return {JSX.Element}
 */
export const SubmitButton = ({filterFn}) => {
  const {conditionsState} = useFilterConditionsState();

  const handleClick = () => {
    const filterItems = items
      .filter((item) => conditionsState.category.includes(item.category))
      .filter((item) => item.price >= Number(conditionsState.price.minPrice) && item.price <= Number(conditionsState.price.maxPrice))
      .filter((item) => {
        if (conditionsState.inStock) {
          return item.inStock === conditionsState.inStock;
        }
        return item;
      });

    filterFn(filterItems);
  };

  return (
    <span className='ml-3'>
      <Button
        variant='contained'
        onClick={handleClick}>
        送出
      </Button>
    </span>
  );
};
