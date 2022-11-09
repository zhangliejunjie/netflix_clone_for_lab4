import * as React from 'react';
import { Card, Link, Container, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
// Mr.Ted import library of date time and form
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from './iconify/Iconify';
import AccountUpdateForm from './AccountUpdateForm';
// import CampaignUpdateForm from './CampaignUpdateForm';
// Kiet uses  forkmik

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

export default function AccountModalEditor({ news, openMoreMenu, onClose, isLoad }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <MenuItem onClick={() => {
                handleOpen()
            }} sx={{ color: 'text.secondary' }}>
                <ListItemIcon>
                    <Iconify icon="eva:edit-fill" width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
            </MenuItem>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <AccountUpdateForm news={news} open={open} isLoad={isLoad} onClose={() => {
                        onClose();
                        handleClose(false);
                    }
                    } />
                </Card>
            </Modal>
        </div>
    );
}
