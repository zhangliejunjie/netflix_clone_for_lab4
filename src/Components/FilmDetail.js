import { Dialog, DialogContent, Stack, Box, IconButton, Typography, Button, Container, Grid, Chip, Slide } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { ListOfFilms } from '../share/ListOfFilms';
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { SimilarVideo as similarVideo } from '../share/SimilarVideo';
import SimilarVideoCard from './SimilarVideoCard';
import NetflixIconButton from './NetflixIconButton';
import AgeLimitChip from './AgeLimitChip';
import MaxLineTypography from './MaxLineTypography';
import { NavLink as RouterLink } from 'react-router-dom';




export default function FilmDetail() {

    const [mute, setMute] = useState(false);

    const userName = useParams();

    var film;
    for (var y = 0; y < 3; y++) {
        for (var x = 0; x < 5; x++) {
            if (userName.id == ListOfFilms[y][x].id)
                film = ListOfFilms[y][x];
        }
    }

    return (
        <Dialog
            id="detail_dialog"
            fullWidth
            scroll="body"
            maxWidth="md"
            open={true}
        // TransitionComponent={
        //     () => {
        //         return <Slide direction="up" />
        //     }
        // }
        >
            <DialogContent sx={{ p: 0, bgcolor: "#181818" }}>
                {/* <Box sx={{ position: "relative" }}> */}
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
                            url={film.video}
                            style={{ position: "absolute", top: 0 }}
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
                        <IconButton
                            // onClick={onClose}
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
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 16,
                                px: { xs: 2, sm: 3, md: 5 },
                            }}
                        >
                            <MaxLineTypography color="white" variant="h4" maxLine={1} sx={{ mb: 2 }}>
                                {film.title}
                            </MaxLineTypography>
                            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                                {/* <PlayButton sx={{ color: "black", py: 0 }} /> */}


                                <Button
                                    // size="medium"
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
                                        color: "black", py: 0,
                                        px: { xs: 1, sm: 2 },
                                        // py: { xs: 0.5, sm: 1 },
                                        fontSize: { xs: 18, sm: 24, md: 28 },
                                        lineHeight: 1.5,
                                        fontWeight: "bold",
                                        whiteSpace: "nowrap",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Play
                                </Button>


                                <NetflixIconButton>
                                    <AddIcon />
                                </NetflixIconButton>

                                <NetflixIconButton>
                                    <ThumbUpOffAltIcon />
                                </NetflixIconButton>
                                <Box flexGrow={1} />
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

                            <Container
                                sx={{
                                    p: "0px !important",
                                }}
                            >
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item xs={12} sm={6} md={8}>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ color: "success.main" }}
                                            >{`69% Match`}</Typography>
                                            <Typography
                                                color="white"
                                                variant="body2">
                                                {film.year}
                                            </Typography>
                                            <AgeLimitChip
                                                sx={{ color: "white" }}
                                                label={`18+`} />

                                            <Typography
                                                color="white"
                                                variant="subtitle2">{`10m`}
                                            </Typography>
                                            <Chip
                                                // color="white"
                                                label={film.nation}
                                                sx={{
                                                    color: "white",
                                                    borderRadius: 0,
                                                    p: 0.5,
                                                    fontSize: 12,
                                                    height: "100%",
                                                    "& > span": { p: 0 },
                                                }}
                                                variant="outlined"
                                            />
                                        </Stack>

                                        <MaxLineTypography
                                            maxLine={3}
                                            variant="body1"
                                            sx={{
                                                mt: 2,
                                                color: "white"
                                            }}
                                        >
                                            {film.description}
                                        </MaxLineTypography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Typography variant="body2" sx={{ my: 1, color: "white" }}>
                                            {`Genres : Drama, History, War`}
                                        </Typography>
                                        <Typography variant="body2" sx={{ my: 1, color: "white" }}>
                                            {`Available in : Deutsch, Polski, עִבְרִית, English`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                    </Box>
                    {similarVideo.length && (
                        <Container
                            sx={{
                                py: 2,
                                px: { xs: 2, sm: 3, md: 5 },
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
                                More Like This
                            </Typography>
                            <Grid container spacing={2}>
                                {similarVideo.map((sm) => (
                                    <Grid item xs={6} sm={4} key={sm.id}>
                                        <SimilarVideoCard video={sm} />
                                    </Grid>
                                ))}

                            </Grid>
                        </Container>
                    )}
                </Box>
            </DialogContent>
        </Dialog>
    )
}
