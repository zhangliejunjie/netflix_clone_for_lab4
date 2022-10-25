import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dialog, DialogContent } from '@mui/material';
import { Box } from '@mui/system';

export default function About() {
    return (
        <Dialog
            id="detail_dialog"
            fullWidth
            scroll="body"
            maxWidth="md"
            open={true}
        >
            <DialogContent sx={{ p: 0, bgcolor: "#181818" }}>
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
                    ></Box>


                </Box>
            </DialogContent>
        </Dialog>
        // <div>
        //     <Accordion>
        //         <AccordionSummary
        //             expandIcon={<ExpandMoreIcon />}
        //             aria-controls="panel1a-content"
        //             id="panel1a-header"
        //         >
        //             <Typography>Accordion 1</Typography>
        //         </AccordionSummary>
        //         <AccordionDetails>
        //             <Typography>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        //                 malesuada lacus ex, sit amet blandit leo lobortis eget.
        //             </Typography>
        //         </AccordionDetails>
        //     </Accordion>
        //     <Accordion>
        //         <AccordionSummary
        //             expandIcon={<ExpandMoreIcon />}
        //             aria-controls="panel2a-content"
        //             id="panel2a-header"
        //         >
        //             <Typography>Accordion 2</Typography>
        //         </AccordionSummary>
        //         <AccordionDetails>
        //             <Typography>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        //                 malesuada lacus ex, sit amet blandit leo lobortis eget.
        //             </Typography>
        //         </AccordionDetails>
        //     </Accordion>
        //     <Accordion disabled>
        //         <AccordionSummary
        //             expandIcon={<ExpandMoreIcon />}
        //             aria-controls="panel3a-content"
        //             id="panel3a-header"
        //         >
        //             <Typography>Disabled Accordion</Typography>
        //         </AccordionSummary>
        //     </Accordion>
        // </div>
    )
}
