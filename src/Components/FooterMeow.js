import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function FooterMeow() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: 150,
                bgcolor: "inherit",
                px: "60px",
            }}
        >
            <Box>
                <Divider>
                    <ul className='footer-container'>
                        <li className='footer-li'><a href="https://twitter.com/TunKitTrngL1">Twitter</a></li>
                        <li className='footer-li'><a href="#">Codepen</a></li>
                        <li className='footer-li'><a href="mailto:truongletuankiet.longan@gmail.com">Email</a></li>
                        <li className='footer-li'><a href="#">Tinder</a></li>
                        <li className='footer-li'><a href="https://github.com/zhangliejunjie">Github</a></li>
                        <li className='footer-li'>
                            <p>👋</p>
                        </li>
                    </ul>
                </Divider>
            </Box>
        </Box>
    );
}
