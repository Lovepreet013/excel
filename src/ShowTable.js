import React from 'react'
import Row from './Row'
import {Table, TableBody, TableContainer, TableHead, TableRow} from '@mui/material';



const ShowTable = ({array, search, setSearch}) => {

  const arr = [...array];
  // console.log(arr.filter((arr) => arr.destination === "china" || arr.destination === "China"));
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
            {Object.keys(array[0]).map(key => (
              <th>{key}</th>
            ))}
            </TableRow>
            </TableHead>
            <TableBody>
              {/* {arr.filter((arr) => arr.destination.toLowerCase() === search.toLowerCase()).map(item =>(
                <Row item={item}/>
              ))} */}
                {arr.map(item => (
                    <Row item={item}/>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ShowTable