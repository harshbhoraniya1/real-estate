import React from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ContactForm from './ContactForm';
import ContactGrid from './ContactGrid';

export default function Contact() {

  const [open, setOpen] = React.useState(false);
  const [id, setid] = React.useState([]);
  const [action, setAction] = React.useState();

const toggleDrawer = (newOpen) => () => {
  setOpen(newOpen);
  setAction('add')
};

const opende =() => {

  setOpen(true);
}

  return (
    <div>
    <ContactGrid open1={open} id={id} setid={setid} opende={opende} action={action} setAction={setAction}/>

    <Button onClick={toggleDrawer(true)}>Add Contact</Button>

      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">

    <ContactForm id={id} setid={setid} action={action} setAction={setAction} open1={open} setOpen={setOpen}/>
      </Drawer>
    </div>
  )
}
