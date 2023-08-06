import React from 'react'
import Cell from './Cell'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

const Row = ({item}) => {
  return (
    <tr>
        {Object.entries(item).map(([key, value]) => {
            return(
                <Cell key={key} cellData={value}/>
            )
        })}
    </tr>
  )
}

export default Row