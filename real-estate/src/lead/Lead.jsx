import LeadForm from './LeadForm'
import LeadGrid from './LeadGrid'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function Lead() {
    const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  return (
    <div>
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
    <LeadForm/>
      </Drawer>
    <LeadGrid/>
    </div>
  )
}
