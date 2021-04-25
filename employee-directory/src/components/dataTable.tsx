import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import API from '../utils/api';

// have to call API.getUsers().then do stuff. 
API.getUsers().then(results => {
  console.log(results.data.results[0])
  const userData = results.data.results;
  userData.map(() => {
    console.log('mapping')
  })
  
  // results.data.map(() => {
  // return (
  //   console.log('mapping!')
  // )
  // })
});



// , ValueGetterParams 
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  // { field: 'image', headerName: 'image', width: 130 },
  { field: 'name', headerName: 'name', width: 130 },
  {
    field: 'phone',
    headerName: 'phone',
    // type: 'number',
    width: 160,
  },
  {field: 'email', headerName: 'email', width: 130},
  {field: 'dob', headerName: 'dob', type: 'date', width: 130}
];

const rows = [
  {id: 1, name: 'Jon Snow', phone: '603-831-2155', email: 'email@email.com', dob: '05-26-1993'},
  {id: 2, name: 'Eric Powell', phone: '123-456-789', email: 'email@email.com', dob: '08-26-1998'},
  {id: 3, name: 'Bonnie Powell', phone: '543-210-5648', email: 'email@email.com', dob: '05-27-1988'},
  {id: 4, name: 'Jack Bauer', phone: '603-250-6548', email: 'email@email.com', dob: '05-26-1988'},
  {id: 5, name: 'Toni Powell', phone: '603-856-1985', email: 'email@email.com', dob: '05-26-1933'},
 // {id: something, name: {results.name}, phone {results.phone}, email: {results.email}, dob: {results.dob}}
];



export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={100} checkboxSelection />
   
    </div>
  );
}

