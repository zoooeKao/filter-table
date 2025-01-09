import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';
import {useFilterConditionsState} from '../hook/useFilterConditions';

/**
 * @type {React.FC}
 */
export const InStock = () => {
  const {conditionsState, setConditionsState} = useFilterConditionsState();

  const handleChange = (event) => {
    setConditionsState((pre) => {
      pre.inStock = event.target.checked;
      return pre;
    });
  };

  return (
    <FormControl>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label='庫存'
        onChange={handleChange}
      />
    </FormControl>
  );
};
