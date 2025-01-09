// @ts-check
import React, {createContext, useState} from 'react';
import items from '../data/items.json';

/** @typedef {import('../context').FilterType} FilterType */

/** @typedef {{conditionsState: FilterType; setConditionsState: React.Dispatch<React.SetStateAction<FilterType>>}} ConditionsContextType */

/** @type {React.Context<ConditionsContextType | null>} */
export const FilterConditionsContext = createContext(null);

const getPrice = items.map((item) => item.price);
const findMinPrice = Math.min(...getPrice);
const findMaxPrice = Math.max(...getPrice);

/**
 * @type {React.FC<{ children: React.ReactNode }>}
 */
export const ConditionsProvider = ({children}) => {
  const [conditionsState, setConditionsState] = useState(
    /** @type {FilterType} */ ({
      category: [],
      price: {
        minPrice: findMinPrice,
        maxPrice: findMaxPrice,
      },
      inStock: true,
    })
  );

  return <FilterConditionsContext.Provider value={{conditionsState, setConditionsState}}>{children}</FilterConditionsContext.Provider>;
};
