import * as React from 'react';
import { Card, Button, Modal, Grid } from '@mui/material';
// Mr.Ted import library of date time and form
import NetflixIconButton from './NetflixIconButton';
import AddIcon from "@mui/icons-material/Add";
import Iconify from './iconify/Iconify';
import NewAccountForm from './NewAccountForm';
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

export default function AccountCreateModal({ reloadData }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid onClick={handleOpen} item xs={12} sm={6} md={3}     >
                <Card sx={{
                    height: '371px',
                    bgcolor: '#292929',
                    borderRadius: "20px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <NetflixIconButton
                        size="large"
                    >
                        <AddIcon />
                    </NetflixIconButton>
                </Card>
            </Grid>

            <Modal
                bgcolor='red'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <NewAccountForm open={open} onClose={() => setOpen(false)} reloadData={reloadData} />
                </Card>
            </Modal>
        </>
    );
}
