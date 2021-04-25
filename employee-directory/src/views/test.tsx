import { resourceLimits } from 'node:worker_threads';
import React from 'react'
import Data from '../data/users.json'

function TestPage() {
    return(
        <div>
            <h1>hello hello</h1>
            {Data.results.map(() => {
                return <h1>{JSON.stringify(Data.results[0].name.first) + JSON.stringify(Data.results[0].email) + JSON.stringify(Data.results[0].phone)}</h1>
            })}
        </div>
    )
}

export default TestPage;