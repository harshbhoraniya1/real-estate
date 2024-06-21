import React, { useEffect, useState } from 'react'
import authFetch from '../custom';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, red } from '@mui/material/colors';



export default function ContactGrid(props) {

  
    const columns = [
        { field: 'email', headerName: 'email', width: 130 },
        { field: 'phoneNumber', headerName: 'phoneNumber', width: 200 },
        {
          field:'',
          headerName: 'Action',
          renderCell :(params)=>{
            return (
              <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={(event) => {
                  handleClick(event, params);
                }
          }
          >
            <MoreVertIcon />
          </IconButton>
            )
          }
    
        },
        
      ];

      
  const [data,setData] = useState([]);

  

  const { open1, id, setid, opende, action, setAction } = props;
  const [dopen, dsetOpen] = React.useState(false);

  const dhandleClose = () => {
    dsetOpen(false);
  };
  const deleteData = () => {
    authFetch.post(`/contact/deleteMany`, id).then((y) => {
      console.log(y);
    });

    dhandleClose();
  };

  const handleDeleteOpen = () => {
    dsetOpen(true);
    handleClose();
  };

  useEffect(() => {
    authFetch.get("/contact").then((y) => {
      setData(
        y.data.map((p) => {
          return { ...p, id: p._id };
        })
      );
    });
  }, [dopen, open1 ]);

  

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, params) => {
    setAnchorEl(event.currentTarget);

    console.log(params);
    setid([params.row._id]);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const manageEdit = (e) => {
    setAction('edit');
    opende();
    handleClose();
  };
      
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
       <MenuItem onClick={manageEdit} >
       <EditNoteIcon sx={{ color: blue[400] }} />
       Edit</MenuItem>
       <MenuItem onClick={handleDeleteOpen}>
       <DeleteIcon sx={{ color: red[700] }} />
       Delete</MenuItem>
      </Menu>
      <Dialog
        open={dopen}
        onClose={dhandleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are u sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dhandleClose}>Cancel</Button>
          <Button onClick={deleteData} autoFocus>
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
