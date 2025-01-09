import {DataGrid} from '@mui/x-data-grid';
import * as React from 'react';

/** @param {Object} param0
 * @param {(import('../context').FilterType)[]} param0.items
 * @return {JSX.Element}
 */
export const ItemsTable = ({items}) => {
  const columns = Object.keys(items[0]).map((headerName) => {
    let headerNameZh = '';
    switch (headerName) {
      case 'name':
        headerNameZh = '商品名稱';
        break;
      case 'category':
        headerNameZh = '類別';
        break;
      case 'price':
        headerNameZh = '價格';
        break;
      case 'inStock':
        headerNameZh = '有庫存';
        break;
    }

    return {field: headerName, headerName: headerNameZh, width: 150};
  });

  const rows = items.map((item, idx) => {
    return {id: idx, ...item, inStock: item.inStock ? '是' : '否'};
  });

  return (
    <div style={{height: '700px', width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </div>
  );
};
