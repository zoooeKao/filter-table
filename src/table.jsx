import {DataGrid} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import * as React from 'react';

export const DisableClickSelectionGrid = () => {
  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        checkboxSelection
        disableRowSelectionOnClick
        {...data}
      />
    </div>
  );
};
