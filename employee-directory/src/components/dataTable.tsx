import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

// // import api from '../utils/api';
// import Users from '../data/'



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
  // {
  //   field: 'email',
  //   headerName: 'email',
  //   type: 'string',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   // , ValueGetterParams this was originall params:ValueGetterParams - importing on line 2 also 
  //   valueGetter: (params:any ) =>
  //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  // },
];

const rows = [
  {id: 1, name: 'Jon Snow', phone: '603-831-2155', email: 'email@email.com', dob: '05-26-1993'},
  {id: 2, name: 'Eric Powell', phone: '123-456-789', email: 'email@email.com', dob: '08-26-1998'},
  {id: 3, name: 'Bonnie Powell', phone: '543-210-5648', email: 'email@email.com', dob: '05-27-1988'},
  {id: 4, name: 'Jack Bauer', phone: '603-250-6548', email: 'email@email.com', dob: '05-26-1988'},
  {id: 5, name: 'Toni Powell', phone: '603-856-1985', email: 'email@email.com', dob: '05-26-1933'},

];



export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={100} checkboxSelection />
   
    </div>
  );
}

// {getUsers.map((users:any, index) => {
//   return <h1>{users.name.first + users.name.last}</h1>
// })}