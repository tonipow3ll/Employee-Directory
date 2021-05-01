import React, { useState, useEffect } from 'react'
import { DataGrid, GridColDef, GridValueFormatterParams, GridValueGetterParams } from '@material-ui/data-grid';
import API from '../utils/api';
import { getConstantValue, IndexedAccessType, resolveTripleslashReference } from 'typescript';
// import { IndexedAccessType } from 'typescript';


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

// const makeUsers = () => {
//   API.getUsers().then(results => {
//     let data = results.data.results;
//     // console.log(data)
//     let i;
//     for (i = 0; i < data.length; i++) {
//       const cell = results.data.results[i].cell;
//       const email = results.data.results[i].email;
//       const name = results.data.results[i].name.first + " " + results.data.results[i].name.last;
//       const dob = results.data.results[i].dob.date.toLocaleString('en-US', {timeZone: 'UTC'})
//       console.log(name, cell, email, dob)

//     }
//   })
// }


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

interface NameI {
  first: string;
  last: string;
}

export default function DataTable() {


  const [results, setRowState] = useState([])

  let columns: GridColDef[] = [
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
       return Math.floor(Math.random() * 5)
      },
      field: 'id', 
      headerName: 'id',
      width: 130 
    },
    { 
      // valueFormatter: (params: GridValueFormatterParams) => { 
      //   console.log(params)
      //   const name = params.value as NameI
      //   // "as InterfaceName" casts the above
        
      //   return name.first + " " + name.last
      // },
      field: 'name', 
      headerName: 'name',
      width: 150 
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        // console.log(params)
        const cell = params.value 
        // "as InterfaceName" casts the above
        return cell
      },
      field: 'cell', 
      headerName: 'cell',
      width: 150 
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        // console.log(params)
        const email = params.value 
        // "as InterfaceName" casts the above
        return email
      },
      field: 'email', 
      headerName: 'email',
      width: 200 
    },
  ]
// interface = this thing i'm about to use, must have these properites
  useEffect(() => {
    API.getUsers().then(response => {
      console.log(response.data.results);
      // const newUsers = response.data.results;
      const newUsers = response.data.results.map((newUsers:any) => {
        console.log(newUsers.name.first)
        // setRowState(response.data.results)
        return {
          id: 5 * Math.random(),
          name: `${newUsers.name.first} ${newUsers.name.last}`,
          cell: `${newUsers.cell}`,
          email: `${newUsers.email}`
        }
      })
      // setRowState(response.data.results)
      setRowState(newUsers)
    })
  }, []);




  return ( 
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
      rows={results} 
      columns={columns} 
      pageSize={100} 
      checkboxSelection />
      {/* {createUsers()} */}
      {/* {makeUsers()} */}

    </div>
  );
}


