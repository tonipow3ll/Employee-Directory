import React, { useState, useEffect } from 'react'
import { DataGrid, GridColDef, GridValueFormatterParams, GridValueGetterParams } from '@material-ui/data-grid';
import API from '../utils/api';

// format date
// get thumbnails to load 

// , ValueGetterParams 
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'phone', headerName: 'phone', width: 160, },
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
       const id = params.value
       return id
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
        const cell = params.value 
        return cell
      },
      field: 'cell', 
      headerName: 'cell',
      width: 150 
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        const email = params.value 
        return email
      },
      field: 'email', 
      headerName: 'email',
      width: 200 
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        const city = params.value 
        return city
      },
      field: 'city', 
      headerName: 'city',
      width: 200 
    },
    { 
      valueFormatter: (params: GridValueFormatterParams) => { 
        const location = params.value 
        return location
      },
      field: 'location', 
      headerName: 'location',
      width: 200 
    },
    // { 
    //   valueFormatter: (params: GridValueFormatterParams) => { 
    //     const dob = params.value 
    //     return dob
    //   },
    //   field: 'dob', 
    //   headerName: 'dob',
    //   width: 200 
    // },
    // { 
    //   valueFormatter: (params: GridValueFormatterParams) => { 
    //     const picture = params.value 
    //     return picture
    //   },
    //   field: 'picture', 
    //   headerName: 'picture',
    //   width: 120
    // },
  ]
// interface = this thing i'm about to use, must have these properites
  useEffect(() => {
    API.getUsers().then(response => {
      console.log(response.data.results);
  
      const newUsers = response.data.results.map((newUsers:any) => {
   
        return {
          id: `${newUsers.login.uuid}`,
          name: `${newUsers.name.first} ${newUsers.name.last}`,
          cell: `${newUsers.cell}`,
          email: `${newUsers.email}`,
          city: `${newUsers.location.city}`,
          location: `${newUsers.location.state}`,
          // dob: `${newUsers.dob.date}`,
          // picture: `${newUsers.picture.thumbnail}`
        }
      })
      setRowState(newUsers)
    })
  }, []);




  return ( 
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid 
      rows={results} 
      columns={columns} 
      pageSize={100} 
      checkboxSelection />
    </div>
  );
}


