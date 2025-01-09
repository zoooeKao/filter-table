import {useContext} from 'react';
import {FilterConditionsContext} from '../context';

export const useFilterConditionsState = () => {
  const filterConditions = useContext(FilterConditionsContext);

  if (!filterConditions) throw new Error('Filter conditions does not has a provider');

  return filterConditions;
};
