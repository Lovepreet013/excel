import React from 'react'
import * as xlsx from "xlsx";
import Table from './ShowTable';
import "./index.css";
import Main from './Main';
import { ThemeProvider, createTheme} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';


const Data = () => {
    const [dataArray, setDataArray] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [mode, setMode] = React.useState("light");

    const darkTheme = createTheme({
      palette:{
        mode: mode
      }
    })

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                var json = xlsx.utils.sheet_to_json(worksheet);
                // console.log(json); same as dataArray
                setDataArray(json);

                for(let i=0; i < json.length; i++){
                    dataArray.push(json[i]);
                }
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }
  return (
    <>
    <Main/>
    <div>
        <form className='main'>
            <input
                type="file"
                name="upload"
                id="upload"
                onChange={readUploadFile}
            />

            <div>
            <input id="filter" type="text" placeholder='search by destination' value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
        </form>
            <svg  className="svg" width="300px" height="300px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="0.984" stroke-linecap="round" stroke-linejoin="miter" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="22" y1="3" x2="22" y2="21"></line><line x1="17" y1="7" x2="17" y2="21"></line><line x1="12" y1="11" x2="12" y2="21"></line><line x1="7" y1="14" x2="7" y2="21"></line><line x1="2" y1="17" x2="2" y2="21"></line></g></svg>

        <div className='items'>
        {dataArray.length > 0 ? <Table array={dataArray.filter((data) => (data.destination).toLowerCase().includes(search.toLowerCase()))}
        search={search} setSearch={Set} /> : null}
        </div>
    </div>
    </>
  )
}

export default Data