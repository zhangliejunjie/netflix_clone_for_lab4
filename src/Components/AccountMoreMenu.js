import * as React from 'react';
import { useRef, useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
// Kiet import Modal 
import { Grid, Button, Container, Stack, Typography, Modal } from '@mui/material';
import Iconify from './iconify/Iconify';
import AccountModalEditor from './AccountModalEditor';
import AccountAlertDialog from './AccountAlertDialog';
// import CampaignModalEditor from './CampaignModalEditor';
// import CampaignDeleteAlertDialog from './CampaignDeleteModal';

// ----------------------------------------------------------------------

export default function AccountMoreMenu({ post, isLoad }) {
    const ref = useRef(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconButton ref={ref} onClick={() => setIsOpen(true)}>
                <Iconify
                    color='white'
                    icon="eva:more-vertical-fill"
                    width={20} height={20}
                />
            </IconButton>

            <Menu
                open={isOpen}
                anchorEl={ref.current}
                onClose={() => setIsOpen(false)}
                PaperProps={{
                    sx: { width: 200, maxWidth: '100%' },
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <AccountAlertDialog
                    news={post}
                    openMoreMenu={open}
                    isLoad={isLoad}
                    onClose={() => setIsOpen(false)
                    }
                />

                <AccountModalEditor
                    news={post}
                    openMoreMenu={open}
                    isLoad={isLoad}
                    onClose={() => setIsOpen(false)
                    } />

            </Menu>
        </>
    );
}
