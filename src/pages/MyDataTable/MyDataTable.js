import React from 'react';
import DataTable from 'react-data-table-component';
import Header from '../../components/Header/Header'

// Sample data
const data = [
  { id: 1, title: 'Conan the Barbarian', year: '1982' },
  { id: 2, title: 'Gladiator', year: '2000' },
  { id: 3, title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001' },
  { id: 4, title: 'The Dark Knight', year: '2008' },
  { id: 5, title: 'Inception', year: '2010' },
];

// Define the columns
const columns = [
  {
    name: 'Title',
    selector: row => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: row => row.year,
    sortable: true,
  },
];

const MyDataTable = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-1'></div>
            <div className="col-lg-11">
            <Header />
                <div className='partnermgt mt-5'>
                    <DataTable
      title=""
      columns={columns}
      data={data}
      pagination
    />
                </div>
            </div>
        </div>
    </div>
    
    
  );
}

export default MyDataTable;
