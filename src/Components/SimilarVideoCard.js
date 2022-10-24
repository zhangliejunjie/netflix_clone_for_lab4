import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react'
import MaxLineTypography from './MaxLineTypography';
import NetflixIconButton from './NetflixIconButton';
import AddIcon from "@mui/icons-material/Add";
import AgeLimitChip from './AgeLimitChip';
import { getRandomNumber } from '../utils/common';

export default function SimilarVideoCard({ video }) {
    return (
        <Card sx={{
            bgcolor: "rgb(20, 20, 20)",
        }}>
            <Box
                sx={{
                    width: "100%",
                    position: "relative",
                    paddingTop: "calc(9 / 16 * 100%)",

                }}
            >
                <Box
                    component="img"
                    src={video.image}
                    sx={{
                        top: 0,
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        backgroundPosition: "50%",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 15,
                    }}
                >
                    <Typography color={'white'} variant="subtitle2">{`21m`}</Typography>
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        px: 2,
                        pb: 0.5,
                    }}
                >
                    <MaxLineTypography
                        maxLine={1}
                        sx={{ width: "80%", fontWeight: 700 }}
                        variant="subtitle1"
                        color={'white'}
                    >
                        {video.title}
                    </MaxLineTypography>
                </Box>
            </Box>
            <CardContent>
                <Stack spacing={1}>
                    <Stack direction="row" alignItems="center">
                        <Box>
                            <Typography
                                variant="subtitle2"
                                sx={{ color: "success.main" }}
                            >{`${getRandomNumber(100)}% Match`}</Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <AgeLimitChip
                                    sx={{ color: "white" }}
                                    label={`${getRandomNumber(20)}+`} />
                                <Typography sx={{ color: "white" }}
                                    variant="body2">

                                    {`${getRandomNumber(20)}+`}
                                </Typography>
                            </Stack>
                        </Box>
                        <Box flexGrow={1} />
                        <NetflixIconButton size="large">
                            <AddIcon />
                        </NetflixIconButton>
                    </Stack>
                    <Box>
                        <MaxLineTypography
                            color={'white'}
                            maxLine={4} variant="subtitle2">
                            {video.overview}
                        </MaxLineTypography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}
