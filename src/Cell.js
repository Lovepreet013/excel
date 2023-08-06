import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

const Cell = ({cellData}) => {
  return (
    <TableCell align='center'>
        {cellData}
    </TableCell>
  )
}

export default Cell