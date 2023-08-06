import React from 'react'
import './index.css';
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Main = () => {
  return (
    <div>
        <main className='hero'>
            <div>
                <Typography variant="h1" color="initial" ml={10} mt={20}>Viewer📑</Typography>
            </div>
        </main>
    </div>
  )
}

export default Main