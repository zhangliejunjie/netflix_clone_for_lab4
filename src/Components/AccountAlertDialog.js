import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Card, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import Iconify from './iconify/Iconify';
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts, updateAnAccount, accountsSelector, addAnAccount, deleteAnAccount } from "../store/slices/accountSlice";

export default function AccountAlertDialog({ news, isLoad, onClose }) {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setDialogOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    boxShadow: '-3px -3px 9px #aaa9a9a2, 3px 3px 7px rgba(147, 149, 151, 0.671)',
    background: "-webkit-linear-gradient(left, rgba(92,129,202,0.9) 0%, rgba(249,140,112,0.9) 100%)",
    bgcolor: 'rgba(54, 25, 25, .00004)',

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteAnAccount(news.id));
    isLoad();
    onClose();
    setOpen(false);
  };

  return (
    <div>
      <MenuItem
        onClick={() => {
          handleOpen();
        }}
        sx={{ color: 'text.secondary' }}
      >
        <ListItemIcon>
          <Iconify icon="eva:trash-2-outline" width={24} height={24} />
        </ListItemIcon>
        <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
      </MenuItem>

      <Dialog
        open={open}
        // onClose={handleClose}\
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Are you sure to delete ' + news?.id + '?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">This account will be unable to see.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => handleDelete(news?.id)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

    </div >
  );
}
