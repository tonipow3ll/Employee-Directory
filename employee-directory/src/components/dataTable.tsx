import React, { useState, useEffect } from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import API from '../utils/api';
import { IndexedAccessType } from 'typescript';


// have to call API.getUsers().then do stuff. 
// API.getUsers().then(results => {
//   console.log(results.data.results)
//   const userData = results.data.results;
//   userData.forEach(() => {
//     const rows = [
//       { id: 1, name: results.data.results.email, phone: '603-831-2155', email: results.data.results[0].email, dob: '05-26-1993' },
//     ]
//     console.log(rows)
//   })
// });


// const createUsers = () => {
//   API.getUsers().then(results => {
//     let data = results.data.results;
//     data.forEach((i:any) => {
//       const cell = results.data.results[i].cell;
//       const email = results.data.results[i].email;
//       const name = results.data.results[i].name.first + " " + results.data.results[i].name.last;
//       const dob = results.data.results[i].dob.data.toLocaleString('en-US', {timeZone: 'UTC'});
//       console.log(name, cell, email, dob)
//     })
//   })
// }

const makeUsers = () => {
  API.getUsers().then(results => {
    let data = results.data.results;
    // console.log(data)
    let i;
    for (i = 0; i < data.length; i++) {
      const cell = results.data.results[i].cell;
      const email = results.data.results[i].email;
      const name = results.data.results[i].name.first + " " + results.data.results[i].name.last;
      const dob = results.data.results[i].dob.date.toLocaleString('en-US', {timeZone: 'UTC'})
      console.log(name, cell, email, dob)

    }
  })
}


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
  { field: 'email', headerName: 'email', width: 130 },
  { field: 'dob', headerName: 'dob', type: 'date', width: 130 }
];

const rows = [
  { id: 1, name: 'Jon Snow', phone: '603-831-2155', email: 'email@email.com', dob: '05-26-1993' },
  { id: 2, name: 'Eric Powell', phone: '123-456-789', email: 'email@email.com', dob: '08-26-1998' },
  { id: 3, name: 'Bonnie Powell', phone: '543-210-5648', email: 'email@email.com', dob: '05-27-1988' },
  { id: 4, name: 'Jack Bauer', phone: '603-250-6548', email: 'email@email.com', dob: '05-26-1988' },
  { id: 5, name: 'Toni Powell', phone: '603-856-1985', email: 'email@email.com', dob: '05-26-1933' },

];



export default function DataTable() {


  const [setResults, setRowState] = useState([])

  //   const userRows = () => {
  //   const [setResults, setRowState] = React.useState({
  //     headings: [
  //       {name: 'name'},
  //       {phone: 'phone'},
  //       {email: 'email'},
  //       {dob: 'dob'},
  //     ]
  //   })
  // };

  useEffect(() => {
    API.getUsers().then(results => {
      console.log(results.data.rezsults);
      setRowState({
        ...setResults,
        // users: results.data.results,
  
      })
    })
  }, []);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={100} checkboxSelection />
      {/* {createUsers()} */}
      {makeUsers()}

    </div>
  );
}

