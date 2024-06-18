import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ContactForm from './ContactForm';
import ContactGrid from './ContactGrid';

export default function Contact() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

  return (
    <div>
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
    <ContactForm/>
      </Drawer>
    <ContactGrid/>
    </div>
  )
}
