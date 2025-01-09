import {Card, CardContent, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import {FixedSizeList} from 'react-window';

/** @param {Object} param0
 * @param {(import('../context').FilterType)[]} param0.items
 * @return {JSX.Element}
 */
export const ItemCard = ({items}) => {
  const renderRow = ({key, index, style}) => {
    // 計算每行的起始索引和結束索引
    const startIndex = index * 2;
    const endIndex = Math.min(startIndex + 2, items.length); // 確保不超過陣列邊界
    const rowItems = items.slice(startIndex, endIndex);

    return (
      <div
        key={key}
        style={{
          ...style,
          display: 'flex', // 使用 flexbox 讓兩欄水平排列
          gap: '16px', // 欄之間的間距
          justifyContent: 'space-between', // 水平分佈
        }}>
        {rowItems.map((item, columnIndex) => (
          <Card
            key={`${key}-${columnIndex}`}
            variant='outlined'
            sx={{flexBasis: 'calc(50% - 8px)'}}>
            <CardContent>
              <Typography variant='h6'>{item.name}</Typography>
              <Typography variant='subtitle1'>{item.category}</Typography>
              <Typography variant='body2'>${item.price}</Typography>
              <Typography variant='body2'>{`${item.inStock}`}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Box sx={{width: '100%', height: '600px', bgcolor: 'background.paper'}}>
      <AutoSizer>
        {({width, height}) => (
          <FixedSizeList
            width={width}
            height={height}
            itemSize={130} // 每行的高度
            itemCount={Math.ceil(items.length / 2)} // 行數 = items 數量 / 每行顯示的卡片數量
          >
            {renderRow}
          </FixedSizeList>
        )}
      </AutoSizer>
    </Box>
  );
};
