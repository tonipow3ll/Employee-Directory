import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
// , ValueGetterParams 
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'image', headerName: 'image', width: 130 },
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
  {id: 2, image: 1, name: 'Jon Snow', phone: '603-831-2155', email: 'email@email.com', dob: '05-26-1988'},
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={100} checkboxSelection />
    </div>
  );
}
