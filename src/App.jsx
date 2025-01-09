import React, {useState} from 'react';
import {SubmitButton} from './components/Button';
import {Category} from './components/Category';
import {InStock} from './components/InStock';
import {ItemCard} from './components/ItemsCard';
import {ItemsTable} from './components/ItemsTable';
import {Price} from './components/Price';
import {Wrapper} from './components/Wrapper';
import items from './data/items.json';
import './index.css';

/**
 * @type {React.FC}
 */
export const App = () => {
  const [itemList, setItemList] = useState(/** @type {import('./context').FilterType} */ (items));

  return (
    <Wrapper>
      <div className='w-1/3 mb-3'>
        <Category />
        <Price />
        <InStock />
        <SubmitButton filterFn={(items) => setItemList(items)} />
      </div>
      <div
        className='w-1/3 lg:hidden'
        data-desc='mobile'>
        <ItemCard items={itemList} />
      </div>
      <div
        className='w-1/3 hidden lg:block'
        data-desc='desktop'>
        <ItemsTable items={itemList} />
      </div>
    </Wrapper>
  );
};
