import React from 'react'
import DataTable from '../components/dataTable';

function HomePage() {
    return(
        <div>
          
      <h1>Employee Directory</h1>
      <h2>A simple employee directory using React, Axios, and the Random User Generator API</h2>
      <DataTable />
        </div>
    )
}

export default HomePage;