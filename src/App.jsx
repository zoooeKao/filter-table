import React, {useEffect, useState} from 'react';
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

  // 追蹤當前是否為手機模式
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1024px)').matches);

  // 當螢幕大小改變時更新 `isMobile`
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };

    window.addEventListener('resize', handleResize);

    // 清除事件監聽器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <div className='w-4/5 lg:w-1/3 mb-3'>
        <Category />
        <Price />
        <InStock />
        <SubmitButton filterFn={(items) => setItemList(items)} />
      </div>
      {/* 資料顯示部分 */}
      {itemList.length > 0 ? (
        isMobile ? (
          <div
            className='w-4/5 lg:hidden'
            data-desc='mobile'>
            <ItemCard items={itemList} />
          </div>
        ) : (
          <div
            className='w-1/3 hidden lg:block'
            data-desc='desktop'>
            <ItemsTable items={itemList} />
          </div>
        )
      ) : (
        <div>查無資料</div>
      )}
    </Wrapper>
  );
};
