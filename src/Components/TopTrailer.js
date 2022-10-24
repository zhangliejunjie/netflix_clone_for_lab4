import { Box, Button, Stack, Typography } from '@mui/material'
import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import YouTubePlayer from "react-player/youtube";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NetflixIconButton from './NetflixIconButton';
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import MaxLineTypography from './MaxLineTypography';

export default function TopTrailer() {

    const [mute, setMute] = useState(false);

    const playerRef = useRef < YouTubePlayer > (null);

    const handleReady = useCallback((player) => {
        player.getInternalPlayer().playVideo();
    }, []);

    return (
        <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    right: 0,
                    position: "relative",
                    pb: "40%",
                    mb: 3,
                    background: "linear-gradient(to top, #141414 0%, rgba(255, 255, 255, 0) 100%)",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        position: "absolute",
                        height: "56.25vw",
                        // paddingTop: "calc(9 / 16 * 100%)",
                    }}
                >
                    <Box
                        sx={{
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            position: "absolute",
                        }}
                    >
                        <Box
                            component="img"
                            // src={`${configuration.images?.base_url}original${video.backdrop_path}`}
                            sx={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                position: "absolute",
                                backgroundPosition: "50%",
                            }}
                        />
                        <YouTubePlayer
                            loop
                            width="100%"
                            height="100%"
                            muted={true}
                            config={{
                                onUnstarted: () => {
                                    if (playerRef.current) {
                                        playerRef.current.getInternalPlayer().playVideo();
                                    }
                                },
                            }}
                            url={`https://youtu.be/B7nU1RCkrnQ`}
                            onReady={handleReady}
                        />
                        <Box
                            sx={{
                                background: `linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)`,
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: "26.09%",
                                opacity: 1,
                                position: "absolute",
                                transition: "opacity .5s",
                            }}
                        />
                        <Box
                            sx={{
                                backgroundColor: "transparent",
                                backgroundImage:
                                    "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)",
                                backgroundRepeat: "repeat-x",
                                backgroundPosition: "0px top",
                                backgroundSize: "100% 100%",
                                bottom: 0,
                                position: "absolute",
                                height: "14.7vw",
                                opacity: 1,
                                top: "auto",
                                width: "100%",
                            }}
                        />
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                                alignItems: "center",
                                position: "absolute",
                                right: 0,
                                bottom: "35%",
                            }}
                        >
                            <NetflixIconButton
                                size="large"
                                onClick={() => {
                                    setMute((v) => !v);
                                }}
                                sx={{ zIndex: 2 }}
                            >
                                {!mute ? <VolumeUpIcon /> : <VolumeOffIcon />}
                            </NetflixIconButton>
                        </Stack>
                    </Box>

                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Stack
                            spacing={4}
                            sx={{
                                bottom: "35%",
                                position: "absolute",
                                left: { xs: "4%", md: "60px" },
                                top: 0,
                                width: "36%",
                                zIndex: 10,
                                justifyContent: "flex-end",
                                alignItems: "flex-start",
                                textAlign: "left",
                            }}
                        >
                            <MaxLineTypography
                                variant="h2"
                                maxLine={1}
                                color="white"
                            >
                                {'Black Swan'}
                            </MaxLineTypography>

                            <MaxLineTypography
                                variant="h5"
                                maxLine={3}
                                color="white"
                            >
                                {'Black Swan is a 2010 American psychological horror film directed by Darren Aronofsky from a screenplay by Mark Heyman, John McLaughlin, and Andres Heinz, based on a story by Heinz. The film stars Natalie Portman, Vincent Cassel, Mila Kunis, Barbara Hershey, and Winona Ryder, and revolves around a production of Tchaikovskys Swan Lake by the New York City Ballet company.'}
                            </MaxLineTypography>

                            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                                <Button
                                    color="inherit"
                                    variant="contained"
                                    startIcon={
                                        <PlayArrowIcon
                                            sx={{
                                                fontSize: {
                                                    xs: "24px !important",
                                                    sm: "32px !important",
                                                    md: "40px !important",
                                                },
                                            }}
                                        />
                                    }

                                    sx={{
                                        px: { xs: 1, sm: 2 },
                                        py: { xs: 0.5, sm: 1 },
                                        fontSize: { xs: 18, sm: 24, md: 28 },
                                        lineHeight: 1.5,
                                        fontWeight: "bold",
                                        whiteSpace: "nowrap",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Play
                                </Button>
                                <Button
                                    size="large"
                                    variant="contained"
                                    startIcon={
                                        <InfoOutlinedIcon
                                            sx={{
                                                fontSize: {
                                                    xs: "24px !important",
                                                    sm: "32px !important",
                                                    md: "40px !important",
                                                },
                                            }}
                                        />
                                    }
                                    sx={{
                                        px: { xs: 1, sm: 2 },
                                        py: { xs: 0.5, sm: 1 },
                                        fontSize: { xs: 18, sm: 24, md: 28 },
                                        lineHeight: 1.5,
                                        fontWeight: "bold",
                                        textTransform: "capitalize",
                                        bgcolor: "#6d6d6eb3",
                                        whiteSpace: "nowrap",
                                        "&:hover": { bgcolor: "#6d6d6e66" },
                                    }}
                                >
                                    More Info
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
