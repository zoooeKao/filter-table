import TextField from '@mui/material/TextField';
import items from '../data/items.json';
import {useFilterConditionsState} from '../hook/useFilterConditions';

const getPrice = items.map((item) => item.price);
const findMinPrice = Math.min(...getPrice);
const findMaxPrice = Math.max(...getPrice);

/**
 * @type {React.FC}
 */
export const Price = () => {
  const {conditionsState, setConditionsState} = useFilterConditionsState();

  const handleChangeMinPrice = (event) => {
    setConditionsState((pre) => {
      pre.price.minPrice = event.target.value;
      return pre;
    });
  };

  const handleChangeMaxPrice = (event) => {
    setConditionsState((pre) => {
      pre.price.maxPrice = event.target.value;
      return pre;
    });
  };

  return (
    <div className='flex gap-4 mb-3'>
      <TextField
        id='outlined-number'
        label='Min-Price'
        type='number'
        onChange={handleChangeMinPrice}
        placeholder={String(findMinPrice)}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
      <TextField
        id='outlined-number'
        label='Max-Price'
        type='number'
        onChange={handleChangeMaxPrice}
        placeholder={String(findMaxPrice)}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
    </div>
  );
};
