import {Autocomplete, TextField} from '@mui/material';
import React from 'react';
import items from '../data/items.json';
import {useFilterConditionsState} from '../hook/useFilterConditions';

// 將類別的種類篩選出來顯示在下拉式選單的選項
const categoryList = Array.from(new Set(items.map((item) => item.category)));

/**
 * @type {React.FC}
 */
export const Category = () => {
  const {conditionsState, setConditionsState} = useFilterConditionsState();

  const handleChange = (event, value) => {
    setConditionsState((pre) => ({
      ...pre,
      category: value,
    }));
  };

  return (
    <div className='mb-4 w-full'>
      <Autocomplete
        multiple
        id='tags-outlined'
        options={categoryList}
        getOptionLabel={(option) => option}
        onChange={handleChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label='category'
            placeholder='select category'
          />
        )}
      />
    </div>
  );
};
