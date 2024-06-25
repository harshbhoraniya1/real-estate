import React from "react";
import LeadForm from "./LeadForm";
import LeadGrid from "./LeadGrid";
import Drawer from "@mui/material/Drawer";

export default function Lead() {
  const [open, setOpen] = React.useState(false);
  const [id, setid] = React.useState([]);
  const [action, setAction] = React.useState("");

  // ------------ for Open Form Drower --------------------
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);

    setAction("add");
  };

  // ------------ for Open Delete Model --------------------
  const opende = () => {
    setOpen(true);
  };

  return (
    <div>
      <LeadGrid
        open1={open}
        id={id}
        setid={setid}
        opende={opende}
        action={action}
        setAction={setAction}
        toggleDrawer={toggleDrawer}
      />

      
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <LeadForm
          id={id}
          setid={setid}
          open={open}
          opende={opende}
          action={action}
          setAction={setAction}
          setOpen={setOpen}
        />
      </Drawer>
    </div>
  );
}
