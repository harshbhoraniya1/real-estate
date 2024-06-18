import React, { useEffect, useState } from 'react'
import authFetch from '../custom';
import { DataGrid } from '@mui/x-data-grid';


export default function ContactGrid() {

    const columns = [
        { field: 'email', headerName: 'email', width: 130 },
        { field: 'phoneNumber', headerName: 'phoneNumber', width: 200 },
        
      ];

      
  const [data,setData] = useState([]);

  useEffect(()=>{
    authFetch.get("/contact/").then(y=>{
      setData(y.data.map((v)=>{
        return{...v,id:v._id};
      }));
    })
  },[]);
      
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
  )
}
