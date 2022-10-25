import PropTypes from 'prop-types';
import { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// @mui
import {
    Box,
    List,
    Badge,
    Button,
    Avatar,
    Tooltip,
    Divider,
    Popover,
    Typography,
    IconButton,
    ListItemText,
    ListSubheader,
    ListItemAvatar,
    ListItemButton,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
    {
        id: 'id à nha',
        title: 'Your order is placed',
        description: 'waiting for shipping',
        avatar: null,
        type: 'order_placed',
        createdAt: "30-06-2002",
        isUnRead: true,
    },
    {
        id: 'faker.datatype.uuid()',
        title: "faker.name.fullName()",
        description: 'answered to your comment on the Minimal',
        avatar: '/assets/images/avatars/avatar_2.jpg',
        type: 'friend_interactive',
        createdAt: "30-06-2002",
        isUnRead: true,
    },
    {
        id: 'id',
        title: 'You have new message',
        description: '5 unread messages',
        avatar: null,
        type: 'chat_message',
        createdAt: "30-04-2022",
        isUnRead: false,
    },
    {
        id: 'id',
        title: 'You have new mail',
        description: 'sent from Guido Padberg',
        avatar: null,
        type: 'mail',
        createdAt: "30-04-2022",
        isUnRead: false,
    },
    {
        id: 'id',
        title: 'Delivery processing',
        description: 'Your order is being shipped',
        avatar: null,
        type: 'order_shipped',
        createdAt: "30-04-2022",
        isUnRead: false,
    },
];

export default function NotificationsPopover() {
    const [notifications, setNotifications] = useState(NOTIFICATIONS);

    const totalUnRead = notifications.filter((item) => item.isUnRead === true).length;

    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false,
            }))
        );
    };

    return (
        <>
            <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen} sx={{ color: "white", width: 40, height: 40 }}>
                <Badge badgeContent={totalUnRead} color="error">
                    {/* <Iconify icon="eva:bell-fill" /> */}
                    <NotificationsIcon xs={{
                        color: "white"
                    }} />
                </Badge>
            </IconButton>

            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        mt: 1.5,
                        ml: 0.75,
                        width: 360,
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1">Notifications</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            You have {totalUnRead} unread messages
                        </Typography>
                    </Box>

                    {totalUnRead > 0 && (
                        <Tooltip title=" Mark all as read">
                            <IconButton color="primary" onClick={handleMarkAllAsRead}>
                                <CheckIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                {/* <StyledRootScrollbar sx={{ height: { xs: 340, sm: 'auto' } }}> */}
                <List
                    disablePadding
                    subheader={
                        <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                            New
                        </ListSubheader>
                    }
                >
                    {notifications.slice(0, 2).map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                    ))}
                </List>

                <List
                    disablePadding
                    subheader={
                        <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                            Before that
                        </ListSubheader>
                    }
                >
                    {notifications.slice(2, 5).map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                    ))}
                </List>
                {/* </StyledRootScrollbar> */}

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box sx={{ p: 1 }}>
                    <Button fullWidth disableRipple>
                        View All
                    </Button>
                </Box>
            </Popover>
        </>
    );
}

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
    notification: PropTypes.shape({
        createdAt: PropTypes.instanceOf(Date),
        id: PropTypes.string,
        isUnRead: PropTypes.bool,
        title: PropTypes.string,
        description: PropTypes.string,
        type: PropTypes.string,
        avatar: PropTypes.any,
    }),
};

function NotificationItem({ notification }) {
    const { avatar, title } = renderContent(notification);

    return (
        <ListItemButton
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(notification.isUnRead && {
                    bgcolor: 'action.selected',
                }),
            }}
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <Typography
                        variant="caption"
                        sx={{
                            mt: 0.5,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'text.disabled',
                        }}
                    >
                        <AccessTimeIcon fontSize='small'/>
                        {'12:12'}
                    </Typography>
                }
            />
        </ListItemButton>
    );
}

// ----------------------------------------------------------------------

function renderContent(notification) {
    const title = (
        <Typography variant="subtitle2">
            {notification.title}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                &nbsp; {notification.description}
            </Typography>
        </Typography>
    );

    if (notification.type === 'order_placed') {
        return {
            avatar: <img alt={notification.title} src="/assets/icons/ic_notification_package.svg" />,
            title,
        };
    }
    if (notification.type === 'order_shipped') {
        return {
            avatar: <img alt={notification.title} src="/assets/icons/ic_notification_shipping.svg" />,
            title,
        };
    }
    if (notification.type === 'mail') {
        return {
            avatar: <img alt={notification.title} src="/assets/icons/ic_notification_mail.svg" />,
            title,
        };
    }
    if (notification.type === 'chat_message') {
        return {
            avatar: <img alt={notification.title} src="/assets/icons/ic_notification_chat.svg" />,
            title,
        };
    }
    return {
        avatar: notification.avatar ? <img alt={notification.title} src={"../images/avatar_5.jpg"} /> : null,
        title,
    };
}
