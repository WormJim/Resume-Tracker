import React, { useState, useEffect } from 'react';
import columns from './columns';
import MUIDataTable from 'mui-datatables';
import { fetchFromDB } from '../util/fetch';

const Filter = ({ user }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchFromDB(`posting/companies?user=${user}`, setData);
  }, []);

  // const data = [
  //   { name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
  //   { name: 'John Walsh', company: 'Test Corp', city: 'Hartford', state: 'CT' },
  //   { name: 'Bob Herm', company: 'Test Corp', city: 'Tampa', state: 'FL' },
  //   { name: 'James Houston', company: 'Test Corp', city: 'Dallas', state: 'TX' }
  // ];

  const options = {
    filterType: 'checkbox',
    serverSide: true,
    elevation: 7,
    selectableRows: false,
    onCellClick: (cellData, cellMeta) => {
      if (cellMeta.colIndex === 1) {
        //TODO: Open Posting Page with details.
      }
    }
  };

  const renderTable = () => {
    if (data)
      return (
        <MUIDataTable
          title={'Job Postings'}
          data={data}
          columns={columns}
          options={options}
        />
      );
    return <div>wating</div>;
  };

  return <>{renderTable()}</>;
};

export default Filter;
