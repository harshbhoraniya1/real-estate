import React from "react";
import { Button } from "@mui/material";
import LeadForm from "./LeadForm";
import LeadGrid from "./LeadGrid";
import Drawer from "@mui/material/Drawer";

export default function Lead() {
    const [open, setOpen] = React.useState(false);
    const [id, setid] = React.useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const opende =() => {

    setOpen(true);
  }
  
  return (
    <div>
      <LeadGrid open1={open} id={id} setid={setid} opende={opende}/>
    <Button onClick={toggleDrawer(true)}>Add lead</Button>
    <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <LeadForm  id={id} setid={setid}/>
      </Drawer>
    </div>
  )
}
