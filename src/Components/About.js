import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dialog, DialogContent, Box, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { NavLink as RouterLink } from 'react-router-dom';
import ReactPlayer from 'react-player';


export default function About() {
    return (
        <Dialog
            id="detail_dialog"
            fullWidth
            scroll="body"
            maxWidth="md"
            open={true}
        >
            <DialogContent sx={{
                p: 0,
                // bgcolor: "#292929",
                // background: "rgba(92,129,202,1)",
                background: "-moz-linear-gradient(left, rgba(92,129,202,1) 0%, rgba(249,140,112,1) 100%)",
                background: "-webkit-linear-gradient(left, rgba(92,129,202,1) 0%, rgba(249,140,112,1) 100%)",
            }}>
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        right: 0,
                        position: "relative",
                        mb: 3,
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            position: "relative",
                            paddingTop: "calc(9 / 16 * 100%)",
                        }}
                    >
                        <ReactPlayer
                            loop
                            muted={true}
                            playing={true}
                            width="100%"
                            height="100%"
                            url={"https://youtu.be/0GsajWIF3ws"}
                            style={{ position: "absolute", top: 0 }}
                        />
                        <IconButton
                            component={RouterLink}
                            to={'/'}
                            sx={{
                                top: 15,
                                right: 15,
                                position: "absolute",
                                bgcolor: "#181818",
                                width: { xs: 22, sm: 40 },
                                height: { xs: 22, sm: 40 },
                                "&:hover": {
                                    bgcolor: "primary.main",
                                },
                            }}
                        >
                            <CloseIcon
                                sx={{ color: "white", fontSize: { xs: 14, sm: 22 } }}
                            />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: 16,
                            px: { xs: 2, sm: 3, md: 5 },
                        }}
                    >
                        <Accordion sx={{
                            bgcolor: "#444",
                            color: "#ffffff",
                            boxShadow: "0px 13px 23px -13px rgba(0,0,0,0.5)",
                            bgcolor: "transparent",
                        }}>
                            <AccordionSummary
                                sx={{
                                    color: "#ffddcc",
                                    bgcolor: "rgba(0,0,0, .4)",
                                    borderRadius: "4px",
                                    mt: "2px",
                                }}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant='h6' >Creator: Vicky Tr????ng (Mr. Ted)</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                transition: "all 200ms cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                                bgcolor: "transparent",
                                borderRadius: "4px",
                            }} >
                                <Typography>
                                    H??? thi??n nga (ti???ng Nga: ?????????????????? ??????????, Lebedinoye Ozero) l?? v??? ballet s??? 20 c???a nh?? so???n nh???c Pyotr Ilyich Tchaikovsky, s??ng t??c kho???ng n??m 1875 - 1876. V??? k???ch ???????c d???ng l??n d???a tr??n nh???ng truy???n c??? t??ch c???a Nga c??ng nh?? m???t truy???n thuy???t c??? x??a c???a n?????c ?????c, k??? v??? Odette, m???t n??ng c??ng ch??a b??? ph?? ph??p bi???n th??nh thi??n nga. V??? ballet ???????c c??ng di???n l???n ?????u ng??y 4 th??ng 3 n??m 1877, t???i nh?? h??t Bolshoi, Moskva v???i t??n H??? thi??n nga.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            bgcolor: "#444",
                            color: "#ffffff",
                            boxShadow: "0px 13px 23px -13px rgba(0,0,0,0.5)",
                            bgcolor: "transparent",
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                sx={{
                                    color: "#ffddcc",
                                    bgcolor: "rgba(0,0,0, .4)",
                                    borderRadius: "4px",
                                    mt: "2px",
                                }}
                            >
                                <Typography variant='h6'>Ballet Swan Lake</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                transition: "all 200ms cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                                bgcolor: "transparent",
                                borderRadius: "4px",
                            }}>
                                <Typography>
                                    H??? thi??n nga (ti???ng Nga: ?????????????????? ??????????, Lebedinoye Ozero) l?? v??? ballet s??? 20 c???a nh?? so???n nh???c Pyotr Ilyich Tchaikovsky, s??ng t??c kho???ng n??m 1875 - 1876. V??? k???ch ???????c d???ng l??n d???a tr??n nh???ng truy???n c??? t??ch c???a Nga c??ng nh?? m???t truy???n thuy???t c??? x??a c???a n?????c ?????c, k??? v??? Odette, m???t n??ng c??ng ch??a b??? ph?? ph??p bi???n th??nh thi??n nga. V??? ballet ???????c c??ng di???n l???n ?????u ng??y 4 th??ng 3 n??m 1877, t???i nh?? h??t Bolshoi, Moskva v???i t??n H??? thi??n nga.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>


                </Box>
            </DialogContent>
        </Dialog >
    )
}
