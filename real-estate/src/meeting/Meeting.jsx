import React, { useState } from "react";
import MeetingForm from "./MeetingForm";
import MeetingGrid from "./MeetingGrid";
import { Button, Drawer } from "@mui/material";

export default function Meeting() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Add Meeting</Button>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <MeetingForm />
      </Drawer>

      <MeetingGrid />
    </>
  );
}
