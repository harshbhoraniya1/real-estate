import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ContactForm from './ContactForm';
import ContactGrid from './ContactGrid';

export default function Contact() {

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
    <ContactGrid open1={open} id={id} setid={setid} opende={opende}/>
    <Button onClick={toggleDrawer(true)}>Add Contact</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
    <ContactForm id={id} setid={setid}/>
      </Drawer>
    </div>
  )
}
