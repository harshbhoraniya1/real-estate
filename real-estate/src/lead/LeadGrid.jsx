import React, { useEffect, useState } from 'react'
import authFetch from '../custom';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function LeadGrid() {
  const columns = [
    { field: '_id', headerName: 'Id', width: 130 },
    { field: 'leadName', headerName: 'leadName', width: 130 },
    { field: 'leadEmail', headerName: 'leadEmail', width: 200 },
    {
      field: 'leadPhoneNumber',
      headerName: 'leadPhoneNumber',
      type: 'number',
      width: 110,
    },
    {
      field: 'leadStatus',
      headerName: 'leadStatus',
      type: 'text',
      width: 90,
    },
    {
      field:'',
      headerName: 'Action',
      renderCell :()=>{
        return (
          <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
        )
      }

    },
  ];
  

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [data,setData] = useState([]);

  useEffect(()=>{
    authFetch.get("/lead/").then(y=>{
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
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        
      />

<Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
       <MenuItem onClick={handleClose}>Delete</MenuItem>
       <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
    </div>
  )
}
