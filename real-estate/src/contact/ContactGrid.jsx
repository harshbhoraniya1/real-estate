import React, { useEffect, useState } from "react";
import authFetch from "../custom";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue, red, grey } from "@mui/material/colors";
import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";


export default function ContactGrid(props) {

    // column for display grid
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
  const { open1, id, setid, opende, action, setAction, toggleDrawer } = props;
  const [dopen, dsetOpen] = React.useState(false);

  // for open delete model
  const handleDeleteOpen = () => {
    dsetOpen(true);
    handleClose();
  };

  // for close delete model
  const dhandleClose = () => {
    dsetOpen(false);
  };

  // for delete data
  const deleteData = () => {
    authFetch.post(`/contact/deleteMany`, id).then((y) => {
      console.log(y);
    });

    dhandleClose();
  };

  // display data
  useEffect(() => {
    authFetch.get("/contact").then((y) => {
      setData(
        y.data.map((p) => {
          return { ...p, id: p._id };
        })
      );
    });
  }, [dopen, open1 ]);

  
// for box
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

  // for open edit model
  const manageEdit = (e) => {
    setAction('edit');
    opende();
    handleClose();
  };

  //-------------- search bar ------------------------------
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // ------------ for Multiple delete --------------------
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
      
  return (
    <>
    {/* search bar */}
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Contacts({data.length})
            </Typography>

            {id.length >= 1 && (
              <Button onClick={handleDeleteOpen}>
                <DeleteIcon sx={{ color: red[700] }} />
              </Button>
            )}

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onBlur={(e) => {
                  setData(
                    data.filter((v) => {
                      return v.leadName
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase());
                    })
                  );
                }}
              />
            </Search>

            <Button
              variant="outlined"
              sx={{ color: grey[50] }}
              onClick={toggleDrawer(true)}
            >
              <AddIcon /> Add Contact
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

    {/* display grid */}
    <Box style={{ height: 400, width: '100%' }}>
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
        onRowSelectionModelChange={(newRowSelectionModel) => {
            setid(newRowSelectionModel);
            console.log(newRowSelectionModel);
          }}
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
      </Box>

      {/* display action button */}
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
    
    </>
  )
}
